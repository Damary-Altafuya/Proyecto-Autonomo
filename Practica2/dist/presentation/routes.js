"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./comprador/routes");
const routes_2 = require("./transaccion/routes");
const routes_3 = require("./producto/routes");
const routes_4 = require("./usuario/routes");
const routes_5 = require("./artesano/routes");
const routes_6 = require("./categoria/routes");
const routes_7 = require("./carrito/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/producto', routes_3.ProductiosRoutes.routes);
        router.use('/api/artesano', routes_5.ArtesansRoutes.routes);
        router.use('/api/categoria', routes_6.CategoriasRoutes.routes);
        router.use('/api/carrito', routes_7.CarritosRoutes.routes);
        router.use('/api/transaccion', routes_2.TransaccionsRoutes.routes);
        router.use('/api/usuario', routes_4.UsuariosRoutes.routes);
        router.use('/api/comprador', routes_1.CompradorsRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
