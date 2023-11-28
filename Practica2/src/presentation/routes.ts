import { Router } from 'express';

import { CompradorRoutes } from './Comprador/routes';
import { UsuarioRoutes } from './Usuario/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/Comprador', CompradorRoutes.routes );
    router.use('/api/Usuario', UsuarioRoutes.routes );
    
    return router;
  }


}

