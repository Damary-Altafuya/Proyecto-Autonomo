import { UsuarioEntity } from '../../entities/usuario.entity';
import { UsuarioRepository } from '../../repositories/Usuario.repository';


export interface DeleteUsuarioUseCase {
  execute( id_usuario: number ): Promise<UsuarioEntity>
}

export class deleteUsuario implements DeleteUsuarioUseCase {
  
  constructor(
    private readonly repository: UsuarioRepository,
  ) {}
  
  execute( id_usuario: number ): Promise<UsuarioEntity> {
    return this.repository.deleteById(id_usuario);
  }

}

