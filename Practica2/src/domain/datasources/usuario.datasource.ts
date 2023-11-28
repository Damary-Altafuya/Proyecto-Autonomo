import { CreateUsuarioDto, UpdateUsuarioDto  } from '../dtos';
import { UsuarioEntity } from '../entities/usuario.entity';



export abstract class UsuarioDatasource {

  abstract create( CreateUsuarioDto: CreateUsuarioDto ): Promise<UsuarioEntity>;

  abstract getAll(): Promise<UsuarioEntity[]>;

  abstract findById( id: number ): Promise<UsuarioEntity>;
  abstract updateById( UpdateUsuarioDto: UpdateUsuarioDto ): Promise<UsuarioEntity>;
  abstract deleteById( id: number ): Promise<UsuarioEntity>;

}