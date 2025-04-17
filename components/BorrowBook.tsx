"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const BorrowBook = () => {
  return (
    <Button className="book-overview_btn">
      <Image src="/icons/book.svg" alt="book" width={20} height={20} />
      <p className="text-xl">Borrow</p>
    </Button>
  );
};

export default BorrowBook;
