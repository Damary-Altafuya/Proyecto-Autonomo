"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionsRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TransaccionsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const TransaccionController = new controller_1.TransaccionesController();
        router.get('/', TransaccionController.getTransacciones);
        router.get('/:id_ctransaccion', TransaccionController.getTransaccionById);
        router.post('/', TransaccionController.createTransaccion);
        router.put('/:id_transaccion', TransaccionController.updateTransaccion);
        router.delete('/:id_transaccion', TransaccionController.deleteTransaccion);
        return router;
    }
}
exports.TransaccionsRoutes = TransaccionsRoutes;
