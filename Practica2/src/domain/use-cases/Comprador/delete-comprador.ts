import { CompradorEntity } from '../../entities/Comprador.entity';
import { CompradorRepository } from '../../repositories/Comprador.repository';

export interface DeleteCompradorUseCase {
  execute( id: number ): Promise<CompradorEntity>
}

export class DeleteComprador implements DeleteCompradorUseCase {
  
  constructor(
    private readonly repository: CompradorRepository,
  ) {}
  
  execute( id: number ): Promise<CompradorEntity> {
    return this.repository.deleteById(id);
  }

}

