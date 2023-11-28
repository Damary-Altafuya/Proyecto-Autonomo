import { UpdateUsuarioDto } from '../../dtos';
import { UsuarioEntity } from '../../entities/usuario.entity';
import { UsuarioRepository } from '../../repositories/Usuario.repository';


export interface UpdateUsuarioUseCase {
  execute( dto: UpdateUsuarioDto ): Promise<UsuarioEntity>
}


export class Updateusuario implements UpdateUsuarioUseCase {
  
  constructor(
    private readonly repository: UsuarioRepository,
  ) {}
  
  execute( dto: UpdateUsuarioDto ): Promise<UsuarioEntity> {
    return this.repository.updateById(dto);
  }

}

