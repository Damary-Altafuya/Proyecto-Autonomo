-- CreateTable
CREATE TABLE "comprador" (
    "id_comprador" SERIAL NOT NULL,
    "direccion_comp" TEXT NOT NULL,
    "ciudad_comp" TEXT NOT NULL,
    "telefono_comp" TEXT NOT NULL,
    "nombre_comp" TEXT,

    CONSTRAINT "comprador_pkey" PRIMARY KEY ("id_comprador")
);

-- CreateTable
CREATE TABLE "producto" (
    "id_producto" SERIAL NOT NULL,
    "nombre_prod" TEXT,
    "descripcion_prod" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "precio_prod" INTEGER,
    "ID_Artesano" INTEGER NOT NULL,
    "ID_Categoria" INTEGER NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "transaccion" (
    "id_transaccion" SERIAL NOT NULL,
    "cantidad_trans" INTEGER,
    "fecha_trans" TIMESTAMP(3) NOT NULL,
    "ID_Comprador" INTEGER NOT NULL,
    "ID_Producto" INTEGER NOT NULL,

    CONSTRAINT "transaccion_pkey" PRIMARY KEY ("id_transaccion")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre_usu" TEXT,
    "apellido_usu" TEXT NOT NULL,
    "email_usu" TEXT NOT NULL,
    "password_usu" TEXT,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "artesano" (
    "id_artesano" SERIAL NOT NULL,
    "descripcion_art" TEXT NOT NULL,
    "ubicacion_art" TEXT NOT NULL,
    "telefono_art" TEXT NOT NULL,
    "nombre_art" TEXT,

    CONSTRAINT "artesano_pkey" PRIMARY KEY ("id_artesano")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre_cat" TEXT,
    "descripcion_cat" TEXT NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "carrito" (
    "id_carrito" SERIAL NOT NULL,
    "fecha_carrito" TIMESTAMP(3) NOT NULL,
    "ID_Comprador" INTEGER NOT NULL,

    CONSTRAINT "carrito_pkey" PRIMARY KEY ("id_carrito")
);

-- CreateTable
CREATE TABLE "_artesanoTousuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_usu_key" ON "usuario"("email_usu");

-- CreateIndex
CREATE UNIQUE INDEX "_artesanoTousuario_AB_unique" ON "_artesanoTousuario"("A", "B");

-- CreateIndex
CREATE INDEX "_artesanoTousuario_B_index" ON "_artesanoTousuario"("B");

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

-- AddForeignKey
ALTER TABLE "_artesanoTousuario" ADD CONSTRAINT "_artesanoTousuario_A_fkey" FOREIGN KEY ("A") REFERENCES "artesano"("id_artesano") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_artesanoTousuario" ADD CONSTRAINT "_artesanoTousuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuario"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
