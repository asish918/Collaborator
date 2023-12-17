import { pgTable, foreignKey, pgEnum, uuid, timestamp, text, jsonb } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])


export const files = pgTable("files", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	title: text("title").notNull(),
	iconId: text("icon_id").notNull(),
	data: text("data"),
	inTrash: text("in_trash"),
	bannerUrl: text("banner_url"),
	workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" } ),
	folderId: uuid("folder_id").notNull().references(() => folders.id, { onDelete: "cascade" } ),
});

export const workspaces = pgTable("workspaces", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	workspaceOwner: uuid("workspace_owner").notNull(),
	title: text("title").notNull(),
	iconId: text("icon_id").notNull(),
	data: text("data"),
	inTrash: text("in_trash"),
	logo: text("logo"),
	bannerUrl: text("banner_url"),
});

export const folders = pgTable("folders", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	title: text("title").notNull(),
	iconId: text("icon_id").notNull(),
	data: text("data"),
	inTrash: text("in_trash"),
	bannerUrl: text("banner_url"),
	workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" } ),
});

export const collaborators = pgTable("collaborators", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	workspaceId: uuid("workspace_id").notNull().references(() => workspaces.id, { onDelete: "cascade" } ),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	userId: uuid("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
});

export const users = pgTable("users", {
	id: uuid("id").primaryKey().notNull(),
	fullName: text("full_name"),
	avatarUrl: text("avatar_url"),
	billingAddress: jsonb("billing_address"),
	paymentMethod: jsonb("payment_method"),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	email: text("email"),
});