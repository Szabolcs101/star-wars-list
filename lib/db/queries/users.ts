import { eq } from "drizzle-orm";
import { db } from "../index";
import { users } from "../schema";
import bcrypt from "bcryptjs";

export async function getUserByEmail(email: string) {
    return db.select().from(users).where(eq(users.email, email)).get() ?? null;
}

export async function getUserById(id: string) {
    return db.select().from(users).where(eq(users.id, id)).get() ?? null;
}

export async function getUserByUsername(name: string) {
    return db.select().from(users).where(eq(users.name, name)).get() ?? null;
}

export async function validateCredentials(email: string, password: string) {
    const user = await getUserByEmail(email);
    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return null;

    const { password: _pw, ...safeUser } = user;
    return safeUser;
}

export async function createUser(email: string, password: string, name: string) {
    const id = crypto.randomUUID();
    const hashed = await bcrypt.hash(password, 10);

    db.insert(users).values({ id, email, password: hashed, name }).run();
    return { id, email, name };
}