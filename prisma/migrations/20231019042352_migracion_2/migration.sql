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

-- AddForeignKey
/*ON DELETE RESTRICT ON UPDATE CASCADE;*/
ALTER TABLE "producto" ADD CONSTRAINT "producto_ID_Artesano_fkey" FOREIGN KEY ("ID_Artesano") REFERENCES "artesano"("id_artesano") ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_ID_Categoria_fkey" FOREIGN KEY ("ID_Categoria") REFERENCES "categoria"("id_categoria")  ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_ID_Comprador_fkey" FOREIGN KEY ("ID_Comprador") REFERENCES "comprador"("id_comprador")  ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_ID_Producto_fkey" FOREIGN KEY ("ID_Producto") REFERENCES "producto"("id_producto") ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrito" ADD CONSTRAINT "carrito_ID_Comprador_fkey" FOREIGN KEY ("ID_Comprador") REFERENCES "comprador"("id_comprador")  ON UPDATE CASCADE;
