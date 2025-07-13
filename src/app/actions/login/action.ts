import { users } from "@/db/schema";
import { db } from "@/lib/db";
import { compare } from "bcryptjs";
import { eq } from "drizzle-orm";

export async function login(formdata: { email: string; password: string }) {
  const { email, password } = formdata;

  if (!email || !password) {
    return { error: "Missing Fields", success: false, user: null };
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .then((res) => res[0]);

  if (!user) return { error: "User not Found", success: false, user: null };

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) return { error: "Invalid credentials", success: false, user: null };

  

  // ✅ Return only plain object
  return {
    user: {
      id: user.id,
      email: user.email,
      userName: user.userName,
      role: user.role,
    },
    success: true,
    error: null,
  };
}
