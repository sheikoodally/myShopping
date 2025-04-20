"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { borrowBook } from "@/lib/actions/book";

interface Props {
  userId: string;
  bookId: string;
  borrowingEligibility: {
    isEligible: boolean;
    message: string;
  };
}

const BorrowBook = ({ userId, bookId, borrowingEligibility: { isEligible, message } }: Props) => {
  const router = useRouter();
  const [borrowing, setBorrowing] = useState(false);

  const handleBorrowing = async () => {
    if (!isEligible) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
    setBorrowing(true);
    try {
      const result = await borrowBook({ bookId, userId });

      if (result.success) {
        toast({
          title: "Success",
          description: "book borrowed successfully",
        });

        router.push("/my-profile");
      } else {
        toast({
          title: "Error",
          description: "An error occured while borrowing the book 1",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "an error occured while borrowing the book",
        variant: "destructive",
      });
    } finally {
      setBorrowing(false);
    }
  };
  return (
    <Button className="book-overview_btn" onClick={handleBorrowing} disabled={borrowing}>
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="text-xl">{borrowing ? "Borrowing" : "Borrow Book"}</p>
    </Button>
  );
};

export default BorrowBook;
