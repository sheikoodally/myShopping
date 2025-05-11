import { auth } from "@/auth";
import AdminBorrowRequestTable from "@/components/admin/AdminBorrowRequestTable";
import { checkAdmin } from "@/lib/admin/users/users";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/sign-in");
  }

  const isAdmin = await checkAdmin(session?.user?.id);

  if (isAdmin.success === false) {
    redirect("/");
  }

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">All Borrow Requests</h2>
      </div>
      <div className="mt-7 w-full overflow-hidden">
        <AdminBorrowRequestTable session={session} />
      </div>
    </section>
  );
};

export default page;
