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
import { db } from "@/database/drizzle";
import DeleteSVG from "@/components/svg/DeleteSVG1";
import { users } from "@/database/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

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

  const userData = await db.select().from(users);

  console.log(userData);
  return (
    <>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow className="admin-table-header">
            <TableHead className="">Name</TableHead>
            <TableHead>Date Joined</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Books Borrowed</TableHead>
            <TableHead>University ID No</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        {userData.length > 0 ? (
          <TableBody>
            {userData.map((user, i) => (
              <TableRow className="users-table-row">
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>$250.00</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="">
                  <DeleteSVG />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          "No users"
        )}
      </Table>
    </>
  );
};

export default AdminUserTable;
