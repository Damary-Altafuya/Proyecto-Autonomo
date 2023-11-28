import { prisma } from '../../data/postgres';
import { CreateCompradorDto, CompradorDatasource, CompradorEntity, UpdateCompradorDto } from '../../domain';




export class CompradorDatasourceImpl implements CompradorDatasource {

  async create( createCompradorDto: CreateCompradorDto ): Promise<CompradorEntity> {
    const comprador = await prisma.comprador.create({
      data: createCompradorDto!
    });

    return CompradorEntity.fromObject( comprador );
  }

  async getAll(): Promise<CompradorEntity[]> {
    const comprador = await prisma.comprador.findMany();
    return comprador.map( comprador => CompradorEntity.fromObject(comprador) );
  }

  async findById( id_comprador: number ): Promise<CompradorEntity> {
    const comprador = await prisma.comprador.findFirst({
      where: { id_comprador }
    });

    if ( !comprador ) throw `Comprador with id ${ id_comprador } not found`;
    return CompradorEntity.fromObject(comprador);
  }

  async updateById( updateCompradorDto: UpdateCompradorDto ): Promise<CompradorEntity> {
    await this.findById( updateCompradorDto.id_comprador );
    
    const updatedComprador = await prisma.comprador.update({
      where: { id_comprador: updateCompradorDto.id_comprador },
      data: updateCompradorDto!.values
    });

    return CompradorEntity.fromObject(updatedComprador);
  }

  async deleteById( id_comprador: number ): Promise<CompradorEntity> {
    await this.findById( id_comprador );
    const deleted = await prisma.comprador.delete({
      where: { id_comprador }
    });

    return CompradorEntity.fromObject( deleted );
  }

}