"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { db } from "@/database/drizzle";
import DeleteSVG from "@/components/svg/DeleteSVG1";
import { users } from "@/database/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import AdminUserDialogue from "./AdminUserDialogue";
import { deleteUser } from "@/lib/admin/users/users";
import { Dialog } from "../ui/dialog";

const AdminUserTable = async () => {
  // const session = await auth();
  let isOpen = false;
  // const [splicedData, setSplicedData] = useState<any | null>();
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

  // const userData = await db.select().from(users).limit(50);

  // if (userData.length > 0) {
  //   // setSplicedData(userData);
  // }

  // const deleteUserAction = async (userId: string) => {
  //   "use server";
  //   console.log(typeof userId);
  //   const isUserDeleted = await deleteUser({ userId });
  //   console.log(isUserDeleted.success);
  //   // await db.delete(users).where(eq(users.id, userId));
  // };

  // async function deleteItem(userId: string) {
  //   "use server"; // mark function as a server action (fixes the error)
  //   console.log("im herE?");

  //   // TODO add item deletion logic
  //   return null;
  // }
  return (
    <>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow className="admin-table-header">
            <TableHead className="">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Books Borrowed</TableHead>
            <TableHead>University ID No</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {/* {userData.length > 0 ? (
          <TableBody>
            {userData.map((user, i) => (
              <TableRow className="users-table-row" key={i}>
                <TableCell className="font-medium">{user?.fullName}</TableCell>
                <TableCell className="font-medium">{user?.email}</TableCell>
                <TableCell className="font-medium">
                  {user?.createdAt?.toLocaleDateString()}
                </TableCell>
                <TableCell className="font-medium">{user?.role}</TableCell>
                <TableCell className="font-medium">Get books borrowed</TableCell>
                <TableCell className="font-medium">{user?.universityId}</TableCell>
                <TableCell className="cursor-pointer">
                  <AdminUserDialogue
                    userId={user?.id}
                    deleteUser={deleteUserAction}
                    closeModal={true}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          "No users"
        )} */}
      </Table>
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
