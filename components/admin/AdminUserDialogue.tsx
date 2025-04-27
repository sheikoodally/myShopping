"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeleteSVG from "../svg/DeleteSVG1";
import { Button } from "../ui/button";
import { deleteUser } from "@/lib/admin/users/users";
import { redirect } from "next/navigation";

interface Props {
  userId: string;
}

const AdminUserDialogue = ({ userId }: Props) => {
  const [open, setOpen] = useState(false);

  const deleteUserAction = async (userId: string) => {
    const isUserDeleted = await deleteUser({ userId });
    if (isUserDeleted?.success) {
      setOpen(false);
      redirect("/admin/users");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <DeleteSVG />
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <DialogDescription className="pt-[25px] text-lg text-dark-400">
          Are you absolutely sure?
        </DialogDescription>
        <DialogFooter>
          {userId && (
            <div className="flex justify-end">
              <Button
                onClick={() => {
                  deleteUserAction(userId);
                }}
              >
                Delete
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdminUserDialogue;
