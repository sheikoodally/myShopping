"use client";
import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { changeRole } from "@/lib/admin/users/users";
import { redirect } from "next/navigation";

const UserRoleChange = ({
  role,
  userId,
  adminId,
}: {
  role: any;
  userId: string;
  adminId: string;
}) => {
  console.log(role);
  const [selectedOption, setSelectedOption] = useState<{ role: "ADMIN" | "USER" }>(role);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (userId === adminId) {
      setBtnDisabled(true);
    }
  }, []);

  return (
    <div className="flex gap-5">
      <Select
        value={selectedOption as any}
        onValueChange={(value) => {
          setSelectedOption(value as any);
        }}
      >
        <SelectTrigger className="w-[125px] text-foreground">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="ADMIN">ADMIN</SelectItem>
            <SelectItem value="USER">USER</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        disabled={btnDisabled}
        onClick={async () => {
          const data = await changeRole({ userId, selectedOption });
          if (data?.success) {
            redirect("/admin/users");
          }
        }}
      >
        Apply
      </Button>
    </div>
  );
};

export default UserRoleChange;
