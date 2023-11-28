"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CategoriasRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const CategoriaController = new controller_1.CategoriesController();
        router.get('/', CategoriaController.getcategorias);
        router.get('/:id_categoria', CategoriaController.getCategoriaById);
        router.post('/', CategoriaController.createCategoria);
        router.put('/:id_categoria', CategoriaController.updateCategoria);
        router.delete('/:id_categoria', CategoriaController.deleteCategoria);
        return router;
    }
}
exports.CategoriasRoutes = CategoriasRoutes;
