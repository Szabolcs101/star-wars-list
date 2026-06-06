import { eq } from "drizzle-orm";
import { db } from "../index";
import { users } from "../schema";
 
export async function getUserByEmail(email: string) {
  return db.select().from(users).where(eq(users.email, email)).get() ?? null;
}
 
export async function getUserById(id: string) {
  return db.select().from(users).where(eq(users.id, id)).get() ?? null;
}
 
export async function validateCredentials(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user || user.password !== password) return null;
 
  const { password: _pw, ...safeUser } = user;
  return safeUser;
}