import { UpdateCompradorDto } from '../../dtos';
import { CompradorEntity } from '../../entities/Comprador.entity';
import { CompradorRepository } from '../../repositories/Comprador.repository';


export interface UpdateCompradorUseCase {
  execute( dto: UpdateCompradorDto ): Promise<CompradorEntity>
}


export class UpdateComprador implements UpdateCompradorUseCase {
  
  constructor(
    private readonly repository: CompradorRepository,
  ) {}
  
  execute( dto: UpdateCompradorDto ): Promise<CompradorEntity> {
    return this.repository.updateById(dto);
  }

}

