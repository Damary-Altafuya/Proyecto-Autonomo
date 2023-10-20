-- DropForeignKey
ALTER TABLE "carrito" DROP CONSTRAINT "carrito_ID_Comprador_fkey";

-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "producto_ID_Artesano_fkey";

-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "producto_ID_Categoria_fkey";

-- DropForeignKey
ALTER TABLE "transaccion" DROP CONSTRAINT "transaccion_ID_Comprador_fkey";

-- DropForeignKey
ALTER TABLE "transaccion" DROP CONSTRAINT "transaccion_ID_Producto_fkey";

-- AlterTable
ALTER TABLE "artesano" ADD COLUMN     "nombre_art" TEXT;

-- AlterTable
ALTER TABLE "categoria" ALTER COLUMN "nombre_cat" DROP NOT NULL;

-- AlterTable
ALTER TABLE "comprador" ALTER COLUMN "nombre_comp" DROP NOT NULL;

-- AlterTable
ALTER TABLE "producto" ALTER COLUMN "nombre_prod" DROP NOT NULL,
ALTER COLUMN "precio_prod" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transaccion" ALTER COLUMN "cantidad_trans" DROP NOT NULL;

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "nombre_usu" DROP NOT NULL,
ALTER COLUMN "password_usu" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_ID_Artesano_fkey" FOREIGN KEY ("ID_Artesano") REFERENCES "artesano"("id_artesano") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_ID_Categoria_fkey" FOREIGN KEY ("ID_Categoria") REFERENCES "categoria"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_ID_Comprador_fkey" FOREIGN KEY ("ID_Comprador") REFERENCES "comprador"("id_comprador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_ID_Producto_fkey" FOREIGN KEY ("ID_Producto") REFERENCES "producto"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito" ADD CONSTRAINT "carrito_ID_Comprador_fkey" FOREIGN KEY ("ID_Comprador") REFERENCES "comprador"("id_comprador") ON DELETE RESTRICT ON UPDATE CASCADE;
