import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { redirect } from "next/navigation";
import ViewBorrowRequests from "./ViewBorrowRequests";
import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { borrowRecords } from "@/database/schema";
import { eq } from "drizzle-orm";
import { Session } from "next-auth";

const AdminBorrowTable = async ({ session }: { session: Session }) => {
  // const booksData = await db.select().from(borrowRecords).limit(50);

  // console.log(booksData);

  return (
    <>
      <ViewBorrowRequests />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious size={"sm"} href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size={"sm"} href="#">
              1
            </PaginationLink>
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext size={"sm"} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default AdminBorrowTable;
