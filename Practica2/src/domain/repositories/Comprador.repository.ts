import { CreateCompradorDto, UpdateCompradorDto } from '../dtos';
import { CompradorEntity } from '../entities/Comprador.entity';



export abstract class CompradorRepository {

  abstract create( CreateCompradorDto: CreateCompradorDto ): Promise<CompradorEntity>;

  abstract getAll(): Promise<CompradorEntity[]>;

  abstract findById( id_comprador: number ): Promise<CompradorEntity>;
  abstract updateById( UpdateCompradorDto: UpdateCompradorDto ): Promise<CompradorEntity>;
  abstract deleteById( id_comprador: number ): Promise<CompradorEntity>;

}