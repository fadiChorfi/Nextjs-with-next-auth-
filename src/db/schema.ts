import {
  pgTable,
  varchar,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// Remove the duplicate - keep only one of these
export const USER_ROLES = ["user", "admin", "moderator"] as const;
export type UserRole = typeof USER_ROLES[number];

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  userName: varchar("user_name", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull().default("user"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});