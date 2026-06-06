import { eq, inArray } from "drizzle-orm";
import { db } from "../index";
import { games, relations } from "../schema";
 
export async function getAllGames() {
  return db.select().from(games).all();
}
 
export async function getGameById(id: string) {
  const game = db.select().from(games).where(eq(games.id, id)).get();
  if (!game) return null;
 
  const gameRelations = db
    .select()
    .from(relations)
    .where(eq(relations.sourceId, id))
    .all();
 
  return {
    ...game,
    relations: gameRelations.map((r) => ({
      relatedId: r.targetId,
      type: r.relationType,
    })),
  };
}

export async function getGamesByIds(ids: string[]) {
  if (ids.length === 0) return [];
  return db.select().from(games).where(inArray(games.id, ids)).all();
}