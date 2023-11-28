import { Router } from 'express';
import { CategoriesController } from './controller';

export class CategoriasRoutes {
  static get routes(): Router {
    const router = Router();
    const CategoriaController = new CategoriesController();
    router.get('/', CategoriaController.getcategorias);
    router.get('/:id_categoria', CategoriaController.getCategoriaById );
    router.post('/', CategoriaController.createCategoria );
    router.put('/:id_categoria', CategoriaController.updateCategoria );
    router.delete('/:id_categoria', CategoriaController.deleteCategoria );
    return router;
  }
}