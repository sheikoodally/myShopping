"use client";

import AuthForm from "@/components/ui/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{ email: "", password: "", fullName: "", universityId: 0, universityCard: "" }}
      onSubmit={() => {}}
    />
  );
};

export default page;
