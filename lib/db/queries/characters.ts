import { eq } from "drizzle-orm";
import { db } from "../index";
import { characters } from "../schema";
 
export async function getAllCharacters() {
  return db.select().from(characters).all();
}
 
export async function getCharacterById(id: string) {
  return db.select().from(characters).where(eq(characters.id, id)).get() ?? null;
}