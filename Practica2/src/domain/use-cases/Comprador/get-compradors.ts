import { CompradorEntity } from '../../entities/Comprador.entity';
import { CompradorRepository } from '../../repositories/Comprador.repository';


export interface GetCompradorUseCasex {
  execute(): Promise<CompradorEntity[]>
}


export class GetCompradors implements GetCompradorUseCasex {
  
  constructor(
    private readonly repository: CompradorRepository,
  ) {}
  
  execute(): Promise<CompradorEntity[]> {
    return this.repository.getAll();
  }

}

