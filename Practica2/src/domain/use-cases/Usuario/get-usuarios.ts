import { UsuarioEntity } from '../../entities/usuario.entity';
import { UsuarioRepository } from '../../repositories/Usuario.repository';


export interface GetUsuariosUseCase {
  execute(): Promise<UsuarioEntity[]>
}


export class GetUsuarios implements GetUsuariosUseCase {
  
  constructor(
    private readonly repository: UsuarioRepository,
  ) {}
  
  execute(): Promise<UsuarioEntity[]> {
    return this.repository.getAll();
  }

}

