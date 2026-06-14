CREATE TABLE `books` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text DEFAULT 'book' NOT NULL,
	`title` text NOT NULL,
	`release_date` text,
	`status` text,
	`canon_status` text,
	`genre` text,
	`author` text,
	`publisher` text,
	`page_number` integer,
	`image_url` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `character_appearances` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`character_id` text NOT NULL,
	`content_id` text NOT NULL,
	`content_table` text NOT NULL,
	FOREIGN KEY (`character_id`) REFERENCES `characters`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `characters` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`image_url` text
);
--> statement-breakpoint
CREATE TABLE `games` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text DEFAULT 'video game' NOT NULL,
	`title` text NOT NULL,
	`release_date` text,
	`status` text,
	`canon_status` text,
	`genre` text,
	`publisher` text,
	`developer` text,
	`platforms` text,
	`image_url` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `relations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`source_id` text NOT NULL,
	`source_table` text NOT NULL,
	`target_id` text NOT NULL,
	`relation_type` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `series` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text DEFAULT 'animation series' NOT NULL,
	`title` text NOT NULL,
	`start_date` text,
	`end_date` text,
	`status` text,
	`canon_status` text,
	`genre` text,
	`director` text,
	`runtime` text,
	`episodes` integer,
	`image_url` text,
	`trailer_url` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `shows` (
	`id` text PRIMARY KEY NOT NULL,
	`type` text DEFAULT 'film' NOT NULL,
	`title` text NOT NULL,
	`release_date` text,
	`status` text,
	`canon_status` text,
	`genre` text,
	`director` text,
	`runtime` text,
	`image_url` text,
	`trailer_url` text,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `user_list_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`content_id` text NOT NULL,
	`content_table` text NOT NULL,
	`list_type` text NOT NULL,
	`progress` integer DEFAULT 0,
	`rating` real,
	`is_favorite` integer DEFAULT false,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_content_unique` ON `user_list_entries` (`user_id`,`content_id`,`content_table`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);