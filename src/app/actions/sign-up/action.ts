"use server";

import { db } from "@/lib/db";
import { users } from "@/db/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export async function signUpAction(_: unknown, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const userName = formData.get("userName")?.toString();

  if (!email || !password || !userName) {
    return { success: false, error: "All fields are required" };
  }

  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then(res => res[0]);

  if (existing) {
    return { success: false, error: "Email already in use" };
  }

  const hashedPassword = await hash(password, 10);

  await db.insert(users).values({
    email,
    password: hashedPassword,
    userName,
    role: "user",
  });

  return { success: true, error: null, email, password };
}
