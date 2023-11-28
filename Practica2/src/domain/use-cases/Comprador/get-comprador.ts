import {CompradorEntity } from '../../entities/Comprador.entity';
import { CompradorRepository } from '../../repositories/Comprador.repository';


export interface GetCompradorUseCase {
  execute( id: number ): Promise<CompradorEntity>
}


export class GetComprador implements GetCompradorUseCase {
  
  constructor(
    private readonly repository: CompradorRepository,
  ) {}
  
execute( id: number ): Promise<CompradorEntity> {
    return this.repository.findById(id);
  }

}

