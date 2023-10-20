/*
  Warnings:

  - You are about to alter the column `precio_prod` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `cantidad_trans` on the `transaccion` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "producto" ALTER COLUMN "precio_prod" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "transaccion" ALTER COLUMN "cantidad_trans" SET DATA TYPE INTEGER;
