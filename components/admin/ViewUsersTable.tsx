"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AdminUserDialogue from "./AdminUserDialogue";

const ViewUsersTable = ({ userData }: { userData: any }) => {
  return (
    <div>
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
        {userData.length > 0 ? (
          <TableBody>
            {userData.map((user: User, i: number) => (
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
                    // deleteUser={deleteUserAction}
                  />
                </TableCell>
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

export default ViewUsersTable;
