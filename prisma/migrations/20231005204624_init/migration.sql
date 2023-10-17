-- CreateTable
CREATE TABLE "User" (
    "User_Id" SERIAL NOT NULL,
    "Artisan_Id" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL,


    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artisan" (
    "Artisan_Id" SERIAL NOT NULL,
    "User_Id"   INTEGER NOT NULL,
    "Description"   VARCHAR NOT NULL,
    "Location"  TEXT NOT NULL,
    "Telephone" NUMERIC,

    CONSTRAINT "Artisan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "Category_Id"   SERIAL NOT NULL,
    "Category_Name" TEXT NOT NULL,
    "Description"   VARCHAR NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Artisan" ADD CONSTRAINT "Artisan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
