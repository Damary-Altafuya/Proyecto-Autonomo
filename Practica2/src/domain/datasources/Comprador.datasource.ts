import { CreateCompradorDto, UpdateCompradorDto } from '../dtos';
import { CompradorEntity } from '../entities/Comprador.entity';



export abstract class CompradorDatasource {

  abstract create( CreateCompradorDto: CreateCompradorDto ): Promise<CompradorEntity>;

  abstract getAll(): Promise<CompradorEntity[]>;

  abstract findById( id: number ): Promise<CompradorEntity>;
  abstract updateById( UpdateCompradorDto: UpdateCompradorDto ): Promise<CompradorEntity>;
  abstract deleteById( id: number ): Promise<CompradorEntity>;

}