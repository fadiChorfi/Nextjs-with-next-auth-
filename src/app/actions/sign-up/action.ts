"use server";
import { users } from "@/db/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { hash } from "bcryptjs";

export async function signUp(
  prevState: { user: null; success: boolean; error: string | null },
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const userName = formData.get("userName") as string;

  if (!email || !password || !userName) {
    return { error: "Missing fields", success: false, user: null };
  }

  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((res) => res[0]);

  if (existing) {
    return { error: "User already exists", success: false, user: null };
  }

  const hashedPassword = await hash(password, 10);

  await db.insert(users).values({
    email,
    password: hashedPassword,
    role: "user",
    userName,
  });

  return {
    user: {
      email,
      userName,
      role: "user",
    },
    success: true,
    error: null,
  };
}
