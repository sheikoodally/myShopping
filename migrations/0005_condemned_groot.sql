ALTER TABLE "borrow_records" ALTER COLUMN "due_date" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "borrow_records" ALTER COLUMN "due_date" DROP NOT NULL;