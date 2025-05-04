'use server';

import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";
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

export const changeRole = async ({ userId, selectedOption }: { userId: string, selectedOption: "ADMIN" | "USER" }) => {
  
  console.log(selectedOption)

  const session = await auth();
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

  if (session?.user?.id === userId) { 
    console.log('you cannot change your own role')
  }

  await db.update(users).set({ role: selectedOption }).where(eq(users.id, userId));
  
  return ({success: true});
}


export const getBorrowedBooks = async ({ userId }: { userId: any }) => {
  
  const getBooks = await db.select().from(borrowRecords).where(eq(borrowRecords.userId, userId));

  let bookDetails = [];

  // if (getBooks.length > 0) { 
  //   getBooks.forEach(book => {
  //     // console.log(`${user.id} has borrowed ${user.borrowDate} books.`);
  //     let d = db.select().from(books).where(eq(books.id, book.bookId));
  //     console.log(d)
  //   });
  //   // const getBooks = await db.select().from(books).where(eq(borrowRecords.userId, userId));
  // }

  // for (const id of getBooks) {
  //   const result = await db.select().from(books).where(eq(books.id, id.bookId)).limit(1);
  //   let d = (result[0].id, result[0].title)
  //   bookDetails.push(d)
  // }

  // console.log(bookDetails);

  return ({ success: true, booksBorrowed: JSON.parse(JSON.stringify(getBooks)) });
  
  // const session = await auth();
  // if (!session?.user?.id) {
  //   redirect("/sign-in");
  // }

  // const isAdmin = await db
  //   .select({ isAdmin: users.role })
  //   .from(users)
  //   .where(eq(users?.id, session?.user?.id))
  //   .limit(1)
  //   .then((res) => res[0].isAdmin === "ADMIN");

  // if (!isAdmin) redirect("/");

  // if (session?.user?.id === userId) { 
  //   console.log('you cannot change your own role')
  // }

  // // await db.update(users).set({ role: selectedOption }).where(eq(users.id, userId));
  
  // return ({success: true});
}

export const getTopGridAdminHome = async () => {


  const now = new Date();
  const lastWeekDate = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

  // console.log(now)

  const getBooksBorrwed = await db.select().from(borrowRecords);
  const userData = await db.select().from(users);
  const totalBooks = await db.select().from(books);
  console.log(lastWeekDate)


  let userIncreased = 0;
  let booksIncreased = 0;
  let booksBorrowed = 0;

  if (userData?.length > 0) { 
    // @ts-ignore: Object is possibly 'null'.
    userIncreased = userData.filter(data => data?.createdAt > lastWeekDate).length;
  }

  if (totalBooks?.length > 0) { 
    // @ts-ignore: Object is possibly 'null'.
    booksIncreased = totalBooks.filter(data => data?.createdAt > lastWeekDate).length;
  }

  if (getBooksBorrwed?.length > 0) { 
    // @ts-ignore: Object is possibly 'null'.
    booksBorrowed = getBooksBorrwed.filter(data => data?.createdAt > lastWeekDate).length;
  }

  return ({
    success: true,
    books: getBooksBorrwed.length,
    totalUsers: userData.length,
    totalBooks: totalBooks.length,
    userIncreased: userIncreased,
    booksIncreased: booksIncreased,
    booksBorrowed:booksBorrowed
    

  })

}

