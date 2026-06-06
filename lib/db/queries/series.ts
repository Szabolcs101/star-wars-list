import { eq, inArray } from "drizzle-orm";
import { db } from "../index";
import { series, relations, characterAppearances, characters } from "../schema";
 
export async function getAllSeries() {
  return db.select().from(series).all();
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