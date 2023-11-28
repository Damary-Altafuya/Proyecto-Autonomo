import { prisma } from '../../data/postgres';
import { CreateUsuarioDto, UsuarioDatasource, UsuarioEntity, UpdateUsuarioDto } from '../../domain';




export class UsuarioDatasourceImpl implements UsuarioDatasource {

  async create( CreateUsuarioDto: CreateUsuarioDto ): Promise<UsuarioEntity> {
    const usuarios = await prisma.usuario.create({
      data: CreateUsuarioDto!
    });

    return UsuarioEntity.fromObject( usuarios );
  }

  async getAll(): Promise<UsuarioEntity[]> {
    const usuarios = await prisma.usuario.findMany();
    return usuarios.map( usuario => UsuarioEntity.fromObject(usuario) );
  }

  async findById( id_usuario: number ): Promise<UsuarioEntity> {
    const usuario = await prisma.usuario.findFirst({
      where: { id_usuario }
    });

    if ( !usuario ) throw `usuario with id ${ id_usuario } not found`;
    return UsuarioEntity.fromObject(usuario);
  }

  async updateById( updateusuarioDto: UpdateUsuarioDto ): Promise<UsuarioEntity> {
    await this.findById( updateusuarioDto.id_usuario );
    
    const updatedusuario = await prisma.usuario.update({
      where: { id_usuario: updateusuarioDto.id_usuario },
      data: updateusuarioDto!.values
    });

    return UsuarioEntity.fromObject(updatedusuario);
  }

  async deleteById( id_usuario: number ): Promise<UsuarioEntity> {
    await this.findById( id_usuario );
    const deleted = await prisma.usuario.delete({
      where: { id_usuario }
    });

    return UsuarioEntity.fromObject( deleted );
  }

}