import { and, eq, inArray, like } from "drizzle-orm";
import { db } from "../index";
import { series, relations, characterAppearances, characters, books } from "../schema";

export async function getAllSeries() {
  return db.select().from(series).all();
}

export async function getSeries(filters: {
  search?: string;
  canonStatus?: string;
  status?: string;
}) {
  const conditions = [];

  if (filters.search) {
    conditions.push(like(series.title, `%${filters.search}%`));
  }
  if (filters.canonStatus) {
    conditions.push(eq(series.canonStatus, filters.canonStatus));
  }
  if (filters.status) {
    conditions.push(eq(series.status, filters.status));
  }

  return db
    .select()
    .from(series)
    .where(conditions.length ? and(...conditions) : undefined);
}

export async function getSeriesById(id: string) {
  const item = db.select().from(series).where(eq(series.id, id)).get();
  if (!item) return null;

  const seriesRelations = db
    .select()
    .from(relations)
    .where(eq(relations.sourceId, id))
    .all();

  const seriesCharacters = db
    .select({ character: characters })
    .from(characterAppearances)
    .innerJoin(characters, eq(characterAppearances.characterId, characters.id))
    .where(eq(characterAppearances.contentId, id))
    .all()
    .map((row) => row.character);

  return {
    ...item,
    relations: seriesRelations.map((r) => ({
      relatedId: r.targetId,
      type: r.relationType,
    })),
    characters: seriesCharacters,
  };
}

export async function getSeriesByIds(ids: string[]) {
  if (ids.length === 0) return [];
  return db.select().from(series).where(inArray(series.id, ids)).all();
}