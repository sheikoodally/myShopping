import { signOut } from "@/auth";
import BookList from "@/components/ui/BookList";
import { Button } from "@/components/ui/button";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import React from "react";

const page = async () => {
  // const id = (await params).id;
  // const bookDetails = await db.select().from(books).where(eq(books.id, id)).limit(1);
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      {/* <BookList title="Borrowed Books" books={sampleBooks} /> */}
    </>
  );
};

export default page;
