import { eq, inArray } from "drizzle-orm";
import { db } from "../index";
import { books, relations, characterAppearances, characters } from "../schema";
 
export async function getAllBooks() {
  return db.select().from(books).all();
}
 
export async function getBookById(id: string) {
  const book = db.select().from(books).where(eq(books.id, id)).get();
  if (!book) return null;
 
  const bookRelations = db
    .select()
    .from(relations)
    .where(eq(relations.sourceId, id))
    .all();
 
  const bookCharacters = db
    .select({ character: characters })
    .from(characterAppearances)
    .innerJoin(characters, eq(characterAppearances.characterId, characters.id))
    .where(eq(characterAppearances.contentId, id))
    .all()
    .map((row) => row.character);
 
  return {
    ...book,
    relations: bookRelations.map((r) => ({
      relatedId: r.targetId,
      type: r.relationType,
    })),
    characters: bookCharacters,
  };
}

export async function getBookByIds(ids: string[]) {
  if (ids.length === 0) return [];
  return db.select().from(books).where(inArray(books.id, ids)).all();
}
 