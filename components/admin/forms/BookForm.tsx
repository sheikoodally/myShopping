"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TypeOf, z, ZodType } from "zod";

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
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/ui/ImageUpload";
import { bookSchema } from "@/lib/validations";

interface Props extends Partial<Book> {
  type?: "create" | "update";
}

const BookForm = ({ type }: Props) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      genre: "",
      rating: 1,
      totalCopies: 1,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {};
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-dark-500">Book Title</FormLabel>
              <FormControl>
                <Input required {...field} className="book-form_input" placeholder="Book title" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default BookForm;
