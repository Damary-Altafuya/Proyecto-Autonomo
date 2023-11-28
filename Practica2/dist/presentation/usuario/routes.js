"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class UsuariosRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const UsuarioController = new controller_1.UsersController();
        router.get('/', UsuarioController.getusuarios);
        router.get('/:id_usuario', UsuarioController.getUsuarioById);
        router.post('/', UsuarioController.createUsuario);
        router.put('/:id_usuario', UsuarioController.updateUsuario);
        router.delete('/:id_usuario', UsuarioController.deleteUsuario);
        return router;
    }
}
exports.UsuariosRoutes = UsuariosRoutes;
