import React, { useEffect, useState } from "react";
import { getBorrowedBooks } from "@/lib/admin/users/users";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeleteSVG from "@/components/svg/DeleteSVG1";
interface Props {
  userId: string;
}

interface BooksData {
  booksBorrowed: [];
  success: boolean;
  // bookDetails: any;
}

const BooksBorrowed = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState<BooksData>();
  useEffect(() => {
    getBorrowedBooks({ userId }).then((book) => setBooks(book));
  }, []);

  console.log(books);

  // const getBooksBorrowed = getBorrowedBooks(userId);
  return (
    <div className="flex gap-2">
      <p className="mt-2">{books?.booksBorrowed?.length}</p>
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button>VIEW</Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
          </DialogHeader>
          <DialogDescription className="pt-[25px] text-lg text-dark-400">
            Are you absolutely sure?
          </DialogDescription>
          <section className="grid grid-cols-2">
            <p>hello</p>
          </section>
          <DialogFooter>
            {userId && (
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    // deleteUserAction(userId);
                  }}
                >
                  Delete
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default BooksBorrowed;
