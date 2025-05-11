'use server';

import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";
import { eq } from "drizzle-orm";

export const createBook = async (params: BookParams) => {
  try {
    const newBook = await db.insert(books).values({
      ...params,
      availableCopies: params.totalCopies,
    }).returning();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
      message: 'an error occured when creating a book'
    }

  } catch (error) {
    return {
      success: false,
      message: 'an error occured when creating a book'
    }
  }
}

export const getBorrowData = async () => {
  const getBookRequest = await db.select().from(borrowRecords);

  let alteredData = [];

  try {

    for (const book of getBookRequest) {
      const userName = await db.select({ fullname: users.fullName }).from(users).where(eq(users.id, book?.userId)).limit(1);
      const bookName = await db.select({ title: books.title }).from(books).where(eq(books.id, book?.bookId)).limit(1);
      alteredData.push({book, userName: userName[0]?.fullname, bookName: bookName[0]?.title})
    }

    return {
      success: true,
      data: alteredData,
    }

  } catch (error) {
    return {
      success: false,
      message: 'an error occured when creating a book',
      data: [],
    }
  }
}