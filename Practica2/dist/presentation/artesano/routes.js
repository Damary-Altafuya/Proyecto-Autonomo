"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtesansRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class ArtesansRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const ArtesanoController = new controller_1.ArtesanosController();
        router.get('/', ArtesanoController.getartesanos);
        router.get('/:id_artesano', ArtesanoController.getArtesanoById);
        router.post('/', ArtesanoController.createArtesano);
        router.put('/:id_artesano', ArtesanoController.updateArtesano);
        router.delete('/:id_artesano', ArtesanoController.deleteArtesano);
        return router;
    }
}
exports.ArtesansRoutes = ArtesansRoutes;
