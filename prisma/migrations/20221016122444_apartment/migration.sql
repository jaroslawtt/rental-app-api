-- CreateTable
CREATE TABLE "Apartment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "rented" BOOLEAN NOT NULL DEFAULT false
);
