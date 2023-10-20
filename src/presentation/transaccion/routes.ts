import { Router } from 'express';
import { TransaccionesController } from './controller';

export class TransaccionsRoutes {
  static get routes(): Router {
    const router = Router();
    const TransaccionController = new TransaccionesController();
    router.get('/', TransaccionController.getTransacciones);
    router.get('/:id_ctransaccion', TransaccionController.getTransaccionById );
    router.post('/', TransaccionController.createTransaccion );
    router.put('/:id_transaccion', TransaccionController.updateTransaccion );
    router.delete('/:id_transaccion', TransaccionController.deleteTransaccion );
    return router;
  }
}