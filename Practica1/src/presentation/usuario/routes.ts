import { Router } from 'express';
import { UsersController } from './controller';

export class UsuariosRoutes {
  static get routes(): Router {
    const router = Router();
    const UsuarioController = new UsersController();
    router.get('/', UsuarioController.getusuarios);
    router.get('/:id_usuario', UsuarioController.getUsuarioById );
    router.post('/', UsuarioController.createUsuario );
    router.put('/:id_usuario', UsuarioController.updateUsuario );
    router.delete('/:id_usuario', UsuarioController.deleteUsuario );
    return router;
  }
}
