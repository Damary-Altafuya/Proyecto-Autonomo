"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritosRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CarritosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const CarritoController = new controller_1.CarritousController();
        router.get('/', CarritoController.getcarritos);
        router.get('/:id_carrito', CarritoController.getCarritoById);
        router.post('/', CarritoController.createCarrito);
        router.put('/:id_carrito', CarritoController.updateCarrito);
        router.delete('/:id_carrito', CarritoController.deleteCarrito);
        return router;
    }
}
exports.CarritosRoutes = CarritosRoutes;
