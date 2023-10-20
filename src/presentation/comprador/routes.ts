import { Router } from 'express';
import { CompradoresController } from './controller';

export class CompradorsRoutes {
  static get routes(): Router {
    const router = Router();
    const CompradorController = new CompradoresController();
    router.get('/', CompradorController.getCompradores);
    router.get('/:id_comprador', CompradorController.getCompradorById );
    router.post('/', CompradorController.createComprador );
    router.put('/:id_comprador', CompradorController.updateComprador );
    router.delete('/:id_comprador', CompradorController.deleteComprador );
    return router;
  }
}