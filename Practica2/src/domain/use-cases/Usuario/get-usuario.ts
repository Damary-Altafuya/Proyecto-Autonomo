import {UsuarioEntity } from '../../entities/usuario.entity';
import { UsuarioRepository } from '../../repositories/Usuario.repository';


export interface GetUsuarioUseCase {
  execute( id_usuario: number ): Promise<UsuarioEntity>
}


export class GetUsuario implements GetUsuarioUseCase {
  
  constructor(
    private readonly repository: UsuarioRepository,
  ) {}
  
  execute( id_usuario: number ): Promise<UsuarioEntity> {
    return this.repository.findById(id_usuario);
  }

}

