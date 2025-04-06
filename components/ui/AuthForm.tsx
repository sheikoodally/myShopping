"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import FileUpload from "./FileUpload";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  const router = useRouter();
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<any> = async (data) => {
    const result = await onSubmit(data);

    console.log(result);

    if (result?.success) {
      toast({
        title: "success",
        description: isSignIn
          ? "You have successfully signed in."
          : "You have successfully signed up.",
      });
      router.push("/");
    } else {
      console.log("im in error");
      toast({
        title: `Error ${isSignIn ? "Signing in" : "Signing up"}`,
        description: result?.error ? "An error occured." : "",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">
          {isSignIn ? "welcome back to BookWise" : "Create your library account"}
        </h1>
        <p className="text-light-100">
          {isSignIn
            ? "Access te vast collection of resources, and stay updated"
            : "Please complete all fields and upload a valid university ID to access the library"}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 w-full">
            {Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                    </FormLabel>
                    <FormControl>
                      {field.name === "universityCard" ? (
                        <FileUpload
                          onFileChange={field.onChange}
                          variant="dark"
                          type="image"
                          accept="image/*"
                          placeholder="Upload Your ID"
                          folder="ids"
                        />
                      ) : (
                        <Input
                          required
                          type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                          {...field}
                          className="form-input"
                        />
                      )}
                    </FormControl>
                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>
            ))}

            {/* <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>This is your public display name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button type="submit" className="form-btn">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-base font-medium">
          {isSignIn ? "New to BookWise? " : "Already have and account? "}

          <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="font-bold text-primary">
            {isSignIn ? "Create an account" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
