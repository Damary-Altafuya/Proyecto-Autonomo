import { Router } from 'express';
import { ArtesanosController } from './controller';

export class ArtesansRoutes {
  static get routes(): Router {
    const router = Router();
    const ArtesanoController = new ArtesanosController();
    router.get('/', ArtesanoController.getartesanos);
    router.get('/:id_artesano', ArtesanoController.getArtesanoById );
    router.post('/', ArtesanoController.createArtesano );
    router.put('/:id_artesano', ArtesanoController.updateArtesano );
    router.delete('/:id_artesano', ArtesanoController.deleteArtesano );
    return router;
  }
}