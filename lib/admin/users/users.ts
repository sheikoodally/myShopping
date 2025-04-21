'use server';

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

export const deleteUser = async ({ userId }: { userId: string }) => {
  console.log('im here')
  console.log(userId)
  // const userDeleted = await db.delete(users).where(eq(users.id, userId));
  // console.log(userDeleted);
  return ({success: true, message: 'user successfulyl deleted'});
}