import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));
  return (
    <div>
      <BookOverview {...sampleBooks[0]} />
      <BookList title="Latest Books" books={sampleBooks} containerClassName="mt-28" />
    </div>
  );
};

export default Home;
