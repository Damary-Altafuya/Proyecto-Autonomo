import { Router } from 'express';

import { CompradorsRoutes,  } from './comprador/routes';
import {  TransaccionsRoutes  } from './transaccion/routes';
import {  ProductiosRoutes  } from './producto/routes';
import {  UsuariosRoutes  } from './usuario/routes';
import {  ArtesansRoutes } from './artesano/routes';
import {  CategoriasRoutes   } from './categoria/routes';
import {  CarritosRoutes  } from './carrito/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/producto', ProductiosRoutes.routes );
    router.use('/api/artesano', ArtesansRoutes.routes );
    router.use('/api/categoria', CategoriasRoutes.routes );
    router.use('/api/carrito', CarritosRoutes.routes );
    router.use('/api/transaccion', TransaccionsRoutes.routes );
    router.use('/api/usuario', UsuariosRoutes.routes );
    router.use('/api/comprador', CompradorsRoutes.routes );
    
    return router;
  }


}