import { eq, and } from "drizzle-orm";
import { db } from "../index";
import { userListEntries } from "../schema";
 
export type ListType =
  | "watching"
  | "completed"
  | "planning";
 
export type ContentTable = "books" | "games" | "series" | "shows";
 
export async function getUserListEntries(userId: string) {
  return db
    .select()
    .from(userListEntries)
    .where(eq(userListEntries.userId, userId))
    .all();
}
 
export async function getUserListEntry(
  userId: string,
  contentId: string,
  contentTable: ContentTable
) {
  return (
    db
      .select()
      .from(userListEntries)
      .where(
        and(
          eq(userListEntries.userId, userId),
          eq(userListEntries.contentId, contentId),
          eq(userListEntries.contentTable, contentTable)
        )
      )
      .get() ?? null
  );
}
 
export async function upsertListEntry(data: {
  userId: string;
  contentId: string;
  contentTable: ContentTable;
  listType: ListType;
  progress?: number;
  rating?: number | null;
  isFavorite?: boolean;
}) {
  const existing = await getUserListEntry(
    data.userId,
    data.contentId,
    data.contentTable
  );
 
  const now = new Date().toISOString();
 
  if (existing) {
    return db
      .update(userListEntries)
      .set({
        listType: data.listType,
        progress: data.progress ?? existing.progress,
        rating: data.rating !== undefined ? data.rating : existing.rating,
        isFavorite: data.isFavorite ?? existing.isFavorite,
        updatedAt: now,
      })
      .where(eq(userListEntries.id, existing.id))
      .run();
  }
 
  return db
    .insert(userListEntries)
    .values({
      userId: data.userId,
      contentId: data.contentId,
      contentTable: data.contentTable,
      listType: data.listType,
      progress: data.progress ?? 0,
      rating: data.rating ?? null,
      isFavorite: data.isFavorite ?? false,
      updatedAt: now,
    })
    .run();
}
 
export async function removeListEntry(
  userId: string,
  contentId: string,
  contentTable: ContentTable
) {
  return db
    .delete(userListEntries)
    .where(
      and(
        eq(userListEntries.userId, userId),
        eq(userListEntries.contentId, contentId),
        eq(userListEntries.contentTable, contentTable)
      )
    )
    .run();
}