import { Router } from 'express';
import { ProductosController } from './controller';

export class ProductiosRoutes {
  static get routes(): Router {
    const router = Router();
    const ProductoController = new ProductosController();
    router.get('/', ProductoController.getProductos);
    router.get('/:id_producto', ProductoController.getProductoById );
    router.post('/', ProductoController.createProducto );
    router.put('/:id_producto', ProductoController.updateProducto );
    router.delete('/:id_producto', ProductoController.deleteProducto );
    return router;
  }
}

