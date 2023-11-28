import { CreateUsuarioDto, UsuarioDatasource, UsuarioEntity, UsuarioRepository, UpdateUsuarioDto } from '../../domain';


export class UsuarioRepositoryImpl implements UsuarioRepository {

  constructor(
    private readonly datasource: UsuarioDatasource,
  ) { }


  create( CreateUsuarioDto: CreateUsuarioDto ): Promise<UsuarioEntity> {
    return this.datasource.create( CreateUsuarioDto );
  }

  getAll(): Promise<UsuarioEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<UsuarioEntity> {
    return this.datasource.findById( id );
  }

  updateById( UpdateUsuarioDto: UpdateUsuarioDto ): Promise<UsuarioEntity> {
    return this.datasource.updateById( UpdateUsuarioDto );
  }

  deleteById( id: number ): Promise<UsuarioEntity> {
    return this.datasource.deleteById( id );
  }

}


