import { Router } from 'express';
import { CarritousController } from './controller';

export class CarritosRoutes {
  static get routes(): Router {
    const router = Router();
    const CarritoController = new CarritousController();
    router.get('/', CarritoController.getcarritos);
    router.get('/:id_carrito', CarritoController.getCarritoById );
    router.post('/', CarritoController.createCarrito );
    router.put('/:id_carrito', CarritoController.updateCarrito );
    router.delete('/:id_carrito', CarritoController.deleteCarrito );
    return router;
  }
}