"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { changeBorrowRequest } from "@/lib/actions/book";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";

const ChangeBorrowBookStatus = ({ bookData }: { bookData: BorrowBookInterface }) => {
  const [selectedOption, setSelectedOption] = useState<"BORROWED" | "RETURNED" | "REQUESTED">(
    bookData?.status
  );
  useEffect(() => {}, [selectedOption]);
  return (
    <div className="flex gap-5">
      <Select
        value={selectedOption}
        onValueChange={async (value) => {
          const data = await changeBorrowRequest(bookData.id, value, bookData.bookId);
          if (data?.success) {
            if (data.success) {
              toast({
                title: "Success",
                description: "Role changed successfully",
              });
              redirect("/admin/borrow-requests");
            } else {
              toast({
                title: "Error",
                description: "An error occured while trying to change role",
                variant: "destructive",
              });
            }
          }
          setSelectedOption(value as "BORROWED" | "RETURNED" | "REQUESTED");
        }}
      >
        <SelectTrigger className="w-[125px] text-foreground">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="REQUESTED">REQUESTED</SelectItem>
            <SelectItem value="BORROWED">BORROWED</SelectItem>
            <SelectItem value="RETURNED">RETURNED</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* <Button
      // disabled={btnDisabled}
      // onClick={async () => {
      //   const data = await changeRole({ userId, selectedOption });
      //   if (data?.success) {
      //     if (data.success) {
      //       toast({
      //         title: "Success",
      //         description: "Role changed successfully",
      //       });
      //       redirect("/admin/users");
      //     } else {
      //       toast({
      //         title: "Error",
      //         description: "An error occured while trying to change role",
      //         variant: "destructive",
      //       });
      //     }
      //   }
      // }}
      >
        Apply
      </Button> */}
    </div>
  );
};

export default ChangeBorrowBookStatus;
