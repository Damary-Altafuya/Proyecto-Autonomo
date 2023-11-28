"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompradorsRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CompradorsRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const CompradorController = new controller_1.CompradoresController();
        router.get('/', CompradorController.getCompradores);
        router.get('/:id_comprador', CompradorController.getCompradorById);
        router.post('/', CompradorController.createComprador);
        router.put('/:id_comprador', CompradorController.updateComprador);
        router.delete('/:id_comprador', CompradorController.deleteComprador);
        return router;
    }
}
exports.CompradorsRoutes = CompradorsRoutes;
