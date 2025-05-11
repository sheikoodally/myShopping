// "use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdminUserDialogue from "./AdminUserDialogue";
import { SelectGroup } from "@radix-ui/react-select";
import { getBorrowData } from "@/lib/admin/actions/book";
import ChangeBorrowBookStatus from "./ChangeBorrowBookStatus";

interface AlteredBooks {
  book: BorrowBookInterface;
  userName: string;
  bookName: string;
}

const ViewBorrowRequestTable = async () => {
  const borrowData = await getBorrowData();
  return (
    <div>
      <Table>
        <TableCaption>List of reuqests</TableCaption>
        <TableHeader>
          <TableRow className="admin-table-header">
            <TableHead className="">Book</TableHead>
            <TableHead>User Requested</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Borrowed date</TableHead>
            <TableHead>Return Date</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Receipt</TableHead>
          </TableRow>
        </TableHeader>
        {borrowData?.data?.length > 0 ? (
          <TableBody>
            {borrowData?.data?.map((book: AlteredBooks, i: number) => (
              <TableRow className="users-table-row" key={i}>
                <TableCell className="font-medium">{book?.bookName}</TableCell>
                <TableCell className="font-medium">{book?.userName}</TableCell>
                <TableCell className="font-medium">
                  <ChangeBorrowBookStatus bookData={book?.book} />
                  {/* {book?.createdAt?.toLocaleDateString()} */}
                </TableCell>
                <TableCell className="font-medium">
                  {book?.book?.createdAt?.toLocaleDateString()}
                </TableCell>
                <TableCell className="font-medium">-</TableCell>
                <TableCell className="font-medium">{book?.book?.dueDate}</TableCell>
                <TableCell className="font-medium">
                  {/* <UserRoleChange
                    role={user?.role as "USER" | "ADMIN"}
                    userId={user?.id}
                    adminId={adminId}
                  /> */}
                  {/* <ChangeBorrowBookStatus bookData={book?.book} /> */}
                </TableCell>
                {/* <TableCell className="font-medium">
                  <BooksBorrowed userId={user?.id} />
                </TableCell> */}
                {/* <TableCell className="font-medium">{book?.universityId}</TableCell> */}
                {/* <TableCell className="cursor-pointer">
                  <AdminUserDialogue userId={book?.id} />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        ) : (
          "No users"
        )}
      </Table>
    </div>
  );
};

export default ViewBorrowRequestTable;
