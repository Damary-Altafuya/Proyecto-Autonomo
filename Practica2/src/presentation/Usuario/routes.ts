import { Router } from 'express';
import { TipoeventoController } from './controller';
import { UsuarioDatasourceImpl } from '../../infraestructure/datasource/Usuario.datasource.impl';
import { UsuarioRepositoryImpl } from '../../infraestructure/repositories/usuario.repository.impl';


export class UsuarioRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new UsuarioDatasourceImpl();
    const usuarioRepositoryImpl = new UsuarioRepositoryImpl( datasource );
    const UsuarioController = new TipoeventoController(usuarioRepositoryImpl);

    router.get('/', UsuarioController.getUsuarios );
    router.get('/:id', UsuarioController.getUsuarioById );
    
    router.post('/', UsuarioController.createUsuario );
    router.put('/:id', UsuarioController.updateusuario );
    router.delete('/:id', UsuarioController.deleteUsuario );


    return router;
  }


}

