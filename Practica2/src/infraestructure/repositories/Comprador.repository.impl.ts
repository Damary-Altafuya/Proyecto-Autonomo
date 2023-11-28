import { CreateCompradorDto, CompradorDatasource, CompradorEntity, CompradorRepository, UpdateCompradorDto } from '../../domain';


export class CompradorRepositoryImpl implements CompradorRepository {

  constructor(
    private readonly datasource: CompradorDatasource,
  ) { }


  create( CreateCompradorDto: CreateCompradorDto ): Promise<CompradorEntity> {
    return this.datasource.create( CreateCompradorDto );
  }

  getAll(): Promise<CompradorEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<CompradorEntity> {
    return this.datasource.findById( id );
  }

  updateById( UpdateCompradorDto: UpdateCompradorDto ): Promise<CompradorEntity> {
    return this.datasource.updateById( UpdateCompradorDto );
  }

  deleteById( id: number ): Promise<CompradorEntity> {
    return this.datasource.deleteById( id );
  }

}


