import { sqliteTable, text, integer, real, uniqueIndex } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
});

export const characters = sqliteTable("characters", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
});

export const books = sqliteTable("books", {
  id: text("id").primaryKey(),
  type: text("type").notNull().default("book"),
  title: text("title").notNull(),
  releaseDate: text("release_date"),
  status: text("status"),
  canonStatus: text("canon_status"),
  genre: text("genre"),
  author: text("author"),
  publisher: text("publisher"),
  pageNumber: integer("page_number"),
  imageUrl: text("image_url"),
  description: text("description"),
});

export const games = sqliteTable("games", {
  id: text("id").primaryKey(),
  type: text("type").notNull().default("video game"),
  title: text("title").notNull(),
  releaseDate: text("release_date"),
  status: text("status"),
  canonStatus: text("canon_status"),
  genre: text("genre"),
  publisher: text("publisher"),
  developer: text("developer"),
  platforms: text("platforms"),
  imageUrl: text("image_url"),
  description: text("description"),
});

export const series = sqliteTable("series", {
  id: text("id").primaryKey(),
  type: text("type").notNull().default("animation series"),
  title: text("title").notNull(),
  startDate: text("start_date"),
  endDate: text("end_date"),
  status: text("status"),
  canonStatus: text("canon_status"),
  genre: text("genre"),
  director: text("director"),
  runtime: text("runtime"),
  episodes: integer("episodes"),
  imageUrl: text("image_url"),
  trailerUrl: text("trailer_url"),
  description: text("description"),
});

export const shows = sqliteTable("shows", {
  id: text("id").primaryKey(),
  type: text("type").notNull().default("film"),
  title: text("title").notNull(),
  releaseDate: text("release_date"),
  status: text("status"),
  canonStatus: text("canon_status"),
  genre: text("genre"),
  director: text("director"),
  runtime: text("runtime"),
  imageUrl: text("image_url"),
  trailerUrl: text("trailer_url"),
  description: text("description"),
});

export const relations = sqliteTable("relations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sourceId: text("source_id").notNull(),
  sourceTable: text("source_table").notNull(),
  targetId: text("target_id").notNull(),
  relationType: text("relation_type").notNull(),
});


export const characterAppearances = sqliteTable("character_appearances", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  characterId: text("character_id")
    .notNull()
    .references(() => characters.id),
  contentId: text("content_id").notNull(),
  contentTable: text("content_table").notNull(),
});

export const userListEntries = sqliteTable("user_list_entries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
  contentId: text("content_id").notNull(),
  contentTable: text("content_table").notNull(),
  listType: text("list_type").notNull(),
  progress: integer("progress").default(0),
  rating: real("rating"),
  isFavorite: integer("is_favorite", { mode: "boolean" }).default(false),
  updatedAt: text("updated_at").notNull(),
}, (table) => ({
  userContentUnique: uniqueIndex("user_content_unique")
    .on(table.userId, table.contentId, table.contentTable),
}));

export const follows = sqliteTable("follows", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    followerId: text("follower_id").notNull().references(() => users.id),
    followingId: text("following_id").notNull().references(() => users.id),
    createdAt: text("created_at").notNull(),
}, (table) => ({
    unique: uniqueIndex("follower_following_unique").on(table.followerId, table.followingId),
}));