ALTER TYPE "public"."borrow_status" ADD VALUE 'REQUESTED';--> statement-breakpoint
ALTER TABLE "borrow_records" ALTER COLUMN "status" SET DEFAULT 'REQUESTED';