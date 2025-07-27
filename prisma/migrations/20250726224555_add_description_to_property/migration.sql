/*
  Warnings:

  - Added the required column `imageUrl` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;
