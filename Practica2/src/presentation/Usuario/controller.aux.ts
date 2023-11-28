import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../../domain/dtos';


export class UsersController {
  //* DI
  constructor() { }
  public getusuarios = async( req: Request, res: Response ) => {
    const usuario = await prisma.usuario.findMany();
    return res.json( usuario );
  };




  public getUsuarioById = async( req: Request, res: Response ) => {
    const id_usuario = +req.params.id_usuario;
    // 
    if ( isNaN( id_usuario ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const user = await prisma.usuario.findFirst({
      where: { id_usuario }
    });
    
    ( user )
      ? res.json( user )
      : res.status( 404 ).json( { error: `usuario with id ${ id_usuario } not found` } );
  };





  public createUsuario = async( req: Request, res: Response ) => {
    
    const [error, createUsuarioDto] = CreateUsuarioDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const user = await prisma.usuario.create({
      data: createUsuarioDto!
    });

    res.json( user );

  };



  public updateUsuario = async( req: Request, res: Response ) => {
    const id_usuario = +req.params.id_usuario;
    const [error, updateUsuarioDto] = UpdateUsuarioDto.create({...req.body, id_usuario});
    if ( error ) return res.status(400).json({ error });
    
    const user = await prisma.usuario.findFirst({
      where: { id_usuario }
    });
    if ( !user ) return res.status( 404 ).json( { error: `usuario with id ${ id_usuario } not found` } );
    const updatedUsuario = await prisma.usuario.update({
      where: { id_usuario },
      data: updateUsuarioDto!.values
    });
    res.json( updatedUsuario );
  }


  public deleteUsuario = async(req:Request, res: Response) => {
    const id_usuario = +req.params.id_usuario;
    const user = await prisma.usuario.findFirst({
      where: { id_usuario }
    });

    if ( !user ) return res.status(404).json({ error: `usuario with id ${ id_usuario } not found` });
    const deleted = await prisma.usuario.delete({
      where: { id_usuario }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `usuario with id ${ id_usuario } not found` });
  }
}