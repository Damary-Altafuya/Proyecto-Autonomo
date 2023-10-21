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

