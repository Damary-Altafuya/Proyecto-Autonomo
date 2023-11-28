import { Router } from 'express';
import { CompradorController } from './controller';
import { CompradorDatasourceImpl } from '../../infraestructure/datasource/Comprador.datasource.impl';
import { CompradorRepositoryImpl } from '../../infraestructure/repositories/Comprador.repository.impl';


export class CompradorRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new CompradorDatasourceImpl();
    const CompradorRepository = new CompradorRepositoryImpl( datasource );
    const compradorController = new CompradorController(CompradorRepository);

    router.get('/', compradorController.getComprador );
    router.get('/:id_comprador', compradorController.getCompradorById );
    
    router.post('/', compradorController.createComprador);
    router.put('/:id_comprador', compradorController.updateComprador );
    router.delete('/:id_comprador', compradorController.deleteComprador );


    return router;
  }


}

