import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import BookCoverSvg from "./BookCoverSvg";

type BookCoverVriant = "extraSmall" | "small" | "medium" | "wide" | "regular";

const varianceStyles: Record<BookCoverVriant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVriant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div className={cn("relative transition-all duration-300", varianceStyles[variant], className)}>
      <BookCoverSvg coverColor={coverColor} />
      <div className="absolute z-10" style={{ left: "12%", width: "87.5%", height: "88%" }}>
        <Image src={coverImage} alt="book cover" fill />
      </div>
    </div>
  );
};

export default BookCover;
