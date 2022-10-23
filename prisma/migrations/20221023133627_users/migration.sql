/*
  Warnings:

  - Added the required column `userId` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Apartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "rented" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Apartment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Apartment" ("days", "id", "name", "price", "rented", "rooms") SELECT "days", "id", "name", "price", "rented", "rooms" FROM "Apartment";
DROP TABLE "Apartment";
ALTER TABLE "new_Apartment" RENAME TO "Apartment";
CREATE UNIQUE INDEX "Apartment_userId_key" ON "Apartment"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
