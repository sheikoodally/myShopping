'use server';

import { db } from "@/database/drizzle";
import { books } from "@/database/schema";

export const createBook = async (params: BookParams) => {
  console.log('im here')
  try {
    console.log('im here')
    console.log(params)
    const newBook = await db.insert(books).values({
      ...params,
      availableCopies: params.totalCopies,
    }).returning();

    console.log(newBook)

    return {
      success: true,
      data: JSON.parse(JSON.stringify(newBook[0])),
      message: 'an error occured when creating a book'
    }

  } catch (error) {
    console.log('im here')
    console.log(params)
    console.log(error)

    return {
      success: false,
      message: 'an error occured when creating a book'
    }
  }
}