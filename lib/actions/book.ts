"use server";

import { db } from "@/database/drizzle";
import { books, borrowRecords } from "@/database/schema";
import dayjs from 'dayjs'
import { eq } from "drizzle-orm";

export const borrowBook = async (params: BorrowBookParams) => {
  const { userId, bookId } = params;

  try {
    const book = await db.select({ availableCopies: books.availableCopies }).from(books).where(eq(books.id, bookId)).limit(1);
    
    console.log(book)
    if (!book.length || book[0].availableCopies <= 0) { 
      return { success: false, error: 'Book is not available for borrowing' };
    }
    // const dueDate = dayjs().add(7, 'day').toDate().toDateString();

    // const record = await db.insert(borrowRecords).values({ userId, bookId, dueDate, status: 'BORROWED' });

    // await db.update(books).set({ availableCopies: book[0].availableCopies - 1 }).where(eq(books.id, bookId));
    
    // return {
    //   success: true,
    //   data: JSON.parse(JSON.stringify(record))
    // }
  } catch (error) {
    return { success: false, error: 'An Error occured while borrowing the book' };
  }
  
}


export const borrowBookRequest = async (params: BorrowBookParams) => {
  const { userId, bookId } = params;

  try {
    const book = await db.select({ availableCopies: books.availableCopies }).from(books).where(eq(books.id, bookId)).limit(1);
    
    console.log(book)
    if (!book.length || book[0].availableCopies <= 0) { 
      return { success: false, error: 'Book is not available for borrowing' };
    }
    const dueDate = dayjs().add(7, 'day').toDate().toDateString();

    const record = await db.insert(borrowRecords).values({ userId, bookId, dueDate, status: 'REQUESTED' });

    await db.update(books).set({ availableCopies: book[0].availableCopies - 1 }).where(eq(books.id, bookId));
    
    return {
      success: true,
      data: JSON.parse(JSON.stringify(record))
    }
  } catch (error) {
    return { success: false, error: 'An Error occured while borrowing the book' };
  }
  
}

export const changeBorrowRequest = async ( borrowId : string, value : string, bookId : string ) => {
  // const { userId, bookId } = params;

  try {
    const book = await db.select({ availableCopies: books.availableCopies }).from(books).where(eq(books.id, bookId)).limit(1);
    if (!book.length || book[0].availableCopies <= 0) { 
      return { success: false, error: 'Book is not available for borrowing' };
    }
    const record = await db.update(borrowRecords).set({ status: value as "BORROWED" | "RETURNED" | "REQUESTED" }).where(eq(borrowRecords.id, borrowId))    
    return {
      success: true,
      data: JSON.parse(JSON.stringify(record))
    }
  } catch (error) {
    return { success: false, error: 'An Error occured while borrowing the book' };
  }
  
}