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
import ViewUsersTable from "./ViewUsersTable";
import { auth } from "@/auth";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";

const AdminUserTable = async () => {
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

  const userData = await db.select().from(users).limit(50);

  return (
    <>
      <ViewUsersTable userData={userData} adminId={session?.user?.id} />
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

export default AdminUserTable;
