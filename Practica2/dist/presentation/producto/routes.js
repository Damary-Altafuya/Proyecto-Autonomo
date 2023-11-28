"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductiosRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ProductiosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ProductoController = new controller_1.ProductosController();
        router.get('/', ProductoController.getProductos);
        router.get('/:id_producto', ProductoController.getProductoById);
        router.post('/', ProductoController.createProducto);
        router.put('/:id_producto', ProductoController.updateProducto);
        router.delete('/:id_producto', ProductoController.deleteProducto);
        return router;
    }
}
exports.ProductiosRoutes = ProductiosRoutes;
