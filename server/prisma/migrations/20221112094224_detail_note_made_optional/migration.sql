-- AlterTable
ALTER TABLE "Expenses" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "note" DROP NOT NULL;
