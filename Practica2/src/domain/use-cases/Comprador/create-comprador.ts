import { CreateCompradorDto } from '../../dtos';
import { CompradorEntity } from '../../entities/Comprador.entity';
import { CompradorRepository } from '../../repositories/Comprador.repository';


export interface CreateCompradorUseCase {
  execute( dto: CreateCompradorDto ): Promise<CompradorEntity>
}

// ctrl+ shift + l
export class CreateComprador implements CreateCompradorUseCase {
  
  constructor(
    private readonly repository: CompradorRepository,
  ) {}
  
  execute( dto: CreateCompradorDto ): Promise<CompradorEntity> {
    return this.repository.create(dto);
  }

}

