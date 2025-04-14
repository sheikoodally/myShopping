import { auth } from "@/auth";
import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { Button } from "@/components/ui/button";
// import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";
import { desc } from "drizzle-orm";
import { late } from "zod";

const Home = async () => {
  const session = await auth();
  const result = await db.select().from(users);
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
  // console.log(JSON.stringify(result, null, 2));
  return (
    <div>
      <BookOverview {...latestBooks[0]} userId={session?.user?.id as string} />
      <BookList title="Latest Books" books={latestBooks.slice(1)} containerClassName="mt-28" />
    </div>
  );
};

export default Home;
