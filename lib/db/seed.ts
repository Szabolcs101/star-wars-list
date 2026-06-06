import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
import path from "path";
import fs from "fs";

const DB_PATH = path.join(process.cwd(), "data", "starwars.db");
const DATA_DIR = path.join(process.cwd(), "data");

function readJson<T>(filename: string): T[] {
  const filePath = path.join(DATA_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T[];
}

async function seed() {
  if (fs.existsSync(DB_PATH)) {
    fs.unlinkSync(DB_PATH);
    console.log("Removed existing database.");
  }

  const sqlite = new Database(DB_PATH);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");
  const db = drizzle(sqlite, { schema });

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS characters (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      image_url TEXT
    );
    CREATE TABLE IF NOT EXISTS books (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL DEFAULT 'book',
      title TEXT NOT NULL,
      release_date TEXT,
      status TEXT,
      canon_status TEXT,
      genre TEXT,
      author TEXT,
      publisher TEXT,
      page_number INTEGER,
      image_url TEXT,
      description TEXT
    );
    CREATE TABLE IF NOT EXISTS games (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL DEFAULT 'video game',
      title TEXT NOT NULL,
      release_date TEXT,
      status TEXT,
      canon_status TEXT,
      genre TEXT,
      publisher TEXT,
      developer TEXT,
      platforms TEXT,
      image_url TEXT,
      description TEXT
    );
    CREATE TABLE IF NOT EXISTS series (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL DEFAULT 'animation series',
      title TEXT NOT NULL,
      start_date TEXT,
      end_date TEXT,
      status TEXT,
      canon_status TEXT,
      genre TEXT,
      director TEXT,
      runtime TEXT,
      episodes INTEGER,
      image_url TEXT,
      trailer_url TEXT,
      description TEXT
    );
    CREATE TABLE IF NOT EXISTS shows (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL DEFAULT 'film',
      title TEXT NOT NULL,
      release_date TEXT,
      status TEXT,
      canon_status TEXT,
      genre TEXT,
      director TEXT,
      runtime TEXT,
      image_url TEXT,
      trailer_url TEXT,
      description TEXT
    );
    CREATE TABLE IF NOT EXISTS relations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      source_id TEXT NOT NULL,
      source_table TEXT NOT NULL,
      target_id TEXT NOT NULL,
      relation_type TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS character_appearances (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      character_id TEXT NOT NULL REFERENCES characters(id),
      content_id TEXT NOT NULL,
      content_table TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS user_list_entries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL REFERENCES users(id),
      content_id TEXT NOT NULL,
      content_table TEXT NOT NULL,
      list_type TEXT NOT NULL,
      progress INTEGER DEFAULT 0,
      rating REAL,
      is_favorite INTEGER DEFAULT 0,
      updated_at TEXT NOT NULL
    );
  `);
  console.log("Tables created.");

  const users = readJson<{ id: string; email: string; password: string; name: string }>("users.json");
  for (const u of users) {
    db.insert(schema.users).values(u).run();
  }
  console.log(`Seeded ${users.length} users.`);

  const chars = readJson<{ id: string; name: string; description?: string; imageurl?: string }>("characters.json");
  const knownCharacterIds = new Set<string>();

  for (const c of chars) {
    db.insert(schema.characters).values({
      id: c.id,
      name: c.name,
      description: c.description ?? null,
      imageUrl: c.imageurl ?? null,
    }).run();
    knownCharacterIds.add(c.id);
  }
  console.log(`Seeded ${chars.length} characters.`);
  
  function insertAppearances(characterIds: string[], contentId: string, contentTable: string) {
    let skipped = 0;
    for (const charId of characterIds) {
      if (!knownCharacterIds.has(charId)) {
        skipped++;
        continue;
      }
      db.insert(schema.characterAppearances)
        .values({ characterId: charId, contentId, contentTable })
        .run();
    }
    if (skipped > 0) {
      console.warn(`${contentId}: skipped ${skipped} unknown character ID(s)`);
    }
  }

  const books = readJson<{
    id: string; type: string; title: string; releaseDate?: string; status?: string;
    canonStatus?: string; genre?: string; author?: string; publisher?: string;
    pageNumber?: number; imageUrl?: string; description?: string;
    characters?: string[]; relations?: { relatedId: string; type: string }[];
  }>("books.json");

  for (const b of books) {
    db.insert(schema.books).values({
      id: b.id, type: b.type, title: b.title,
      releaseDate: b.releaseDate ?? null, status: b.status ?? null,
      canonStatus: b.canonStatus ?? null, genre: b.genre ?? null,
      author: b.author ?? null, publisher: b.publisher ?? null,
      pageNumber: b.pageNumber ?? null, imageUrl: b.imageUrl ?? null,
      description: b.description ?? null,
    }).run();

    insertAppearances(b.characters ?? [], b.id, "books");

    for (const rel of b.relations ?? []) {
      db.insert(schema.relations).values({
        sourceId: b.id, sourceTable: "books", targetId: rel.relatedId, relationType: rel.type,
      }).run();
    }
  }
  console.log(`Seeded ${books.length} books.`);

  const games = readJson<{
    id: string; type: string; title: string; releaseDate?: string; status?: string;
    canonStatus?: string; genre?: string; publisher?: string; developer?: string;
    platforms?: string; imageUrl?: string; description?: string;
    relations?: { relatedId: string; type: string }[];
  }>("games.json");

  for (const g of games) {
    db.insert(schema.games).values({
      id: g.id, type: g.type, title: g.title,
      releaseDate: g.releaseDate ?? null, status: g.status ?? null,
      canonStatus: g.canonStatus ?? null, genre: g.genre ?? null,
      publisher: g.publisher ?? null, developer: g.developer ?? null,
      platforms: g.platforms ?? null, imageUrl: g.imageUrl ?? null,
      description: g.description ?? null,
    }).run();

    for (const rel of g.relations ?? []) {
      db.insert(schema.relations).values({
        sourceId: g.id, sourceTable: "games", targetId: rel.relatedId, relationType: rel.type,
      }).run();
    }
  }
  console.log(`Seeded ${games.length} games.`);

  const seriesList = readJson<{
    id: string; type: string; title: string; startDate?: string; endDate?: string;
    status?: string; canonStatus?: string; genre?: string; director?: string;
    runtime?: number | string; episodes?: number; imageUrl?: string; trailerUrl?: string;
    description?: string; characters?: string[]; relations?: { relatedId: string; type: string }[];
  }>("series.json");

  for (const s of seriesList) {
    db.insert(schema.series).values({
      id: s.id, type: s.type, title: s.title,
      startDate: s.startDate ?? null, endDate: s.endDate ?? null,
      status: s.status ?? null, canonStatus: s.canonStatus ?? null,
      genre: s.genre ?? null, director: s.director ?? null,
      runtime: s.runtime != null ? String(s.runtime) : null,
      episodes: s.episodes ?? null, imageUrl: s.imageUrl ?? null,
      trailerUrl: s.trailerUrl ?? null, description: s.description ?? null,
    }).run();

    insertAppearances(s.characters ?? [], s.id, "series");

    for (const rel of s.relations ?? []) {
      db.insert(schema.relations).values({
        sourceId: s.id, sourceTable: "series", targetId: rel.relatedId, relationType: rel.type,
      }).run();
    }
  }
  console.log(`Seeded ${seriesList.length} series.`);

  const showsList = readJson<{
    id: string; type: string; title: string; releaseDate?: string; status?: string;
    canonStatus?: string; genre?: string; director?: string; runtime?: number | string;
    imageUrl?: string; trailerUrl?: string; description?: string;
    characters?: string[]; relations?: { relatedId: string; type: string }[];
  }>("shows.json");

  for (const s of showsList) {
    db.insert(schema.shows).values({
      id: s.id, type: s.type, title: s.title,
      releaseDate: s.releaseDate ?? null, status: s.status ?? null,
      canonStatus: s.canonStatus ?? null, genre: s.genre ?? null,
      director: s.director ?? null,
      runtime: s.runtime != null ? String(s.runtime) : null,
      imageUrl: s.imageUrl ?? null, trailerUrl: s.trailerUrl ?? null,
      description: s.description ?? null,
    }).run();

    insertAppearances(s.characters ?? [], s.id, "shows");

    for (const rel of s.relations ?? []) {
      db.insert(schema.relations).values({
        sourceId: s.id, sourceTable: "shows", targetId: rel.relatedId, relationType: rel.type,
      }).run();
    }
  }
  console.log(`Seeded ${showsList.length} shows.`);

  sqlite.close();
  console.log("\n Database seeded successfully → data/starwars.db");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});