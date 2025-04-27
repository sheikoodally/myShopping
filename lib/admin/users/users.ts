'use server';

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const deleteUser = async ({ userId }: { userId: string }) => {
  await db.delete(users).where(eq(users.id, userId));
  return ({success: true, message: 'user successfulyl deleted'});
}

export const viewUser = async () => {

  const session = await auth();

  console.log(session)

  if (!session?.user?.id) {
    redirect("/sign-in");
  }

  const isAdmin = await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users?.id, session?.user?.id))
    .limit(1)
    .then((res) => res[0].isAdmin === "ADMIN");

  if (!isAdmin) redirect("/");

  const userData = await db.select().from(users).limit(50);
  return ({success: true, data: userData});
}

