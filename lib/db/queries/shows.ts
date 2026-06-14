import { and, eq, inArray, like } from "drizzle-orm";
import { db } from "../index";
import { shows, relations, characterAppearances, characters, books } from "../schema";

export async function getAllShows() {
  return db.select().from(shows).all();
}

export async function getShows(filters: {
  search?: string;
  canonStatus?: string;
  status?: string;
}) {
  const conditions = [];

  if (filters.search) {
    conditions.push(like(shows.title, `%${filters.search}%`));
  }
  if (filters.canonStatus) {
    conditions.push(eq(shows.canonStatus, filters.canonStatus));
  }
  if (filters.status) {
    conditions.push(eq(shows.status, filters.status));
  }

  return db
    .select()
    .from(shows)
    .where(conditions.length ? and(...conditions) : undefined);
}

export async function getShowById(id: string) {
  const show = db.select().from(shows).where(eq(shows.id, id)).get();
  if (!show) return null;

  const showRelations = db
    .select()
    .from(relations)
    .where(eq(relations.sourceId, id))
    .all();

  const showCharacters = db
    .select({ character: characters })
    .from(characterAppearances)
    .innerJoin(characters, eq(characterAppearances.characterId, characters.id))
    .where(eq(characterAppearances.contentId, id))
    .all()
    .map((row) => row.character);

  return {
    ...show,
    relations: showRelations.map((r) => ({
      relatedId: r.targetId,
      type: r.relationType,
    })),
    characters: showCharacters,
  };
}

export async function getShowByIds(ids: string[]) {
  if (ids.length === 0) return [];
  return db.select().from(shows).where(inArray(shows.id, ids)).all();
}