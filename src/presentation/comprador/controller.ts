import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCompradorDto, UpdateCompradorDto } from '../../domain/dtos';


export class CompradoresController {
  //* DI
  constructor() { }
  public getCompradores = async( req: Request, res: Response ) => {
    const comprador = await prisma.comprador.findMany();
    return res.json( comprador );
  };




  public getCompradorById = async( req: Request, res: Response ) => {
    const id_comprador = +req.params.id_comprador;
    //    localhost:3000/producto/1
    if ( isNaN( id_comprador ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const Comprad = await prisma.comprador.findFirst({
      where: { id_comprador }
    });
    
    ( Comprad )
      ? res.json( Comprad )
      : res.status( 404 ).json( { error: `Comprador with id ${ id_comprador } not found` } );
  };





  public createComprador = async( req: Request, res: Response ) => {
    
    const [error, createCompradorDto] = CreateCompradorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const Comprad = await prisma.comprador.create({
      data: createCompradorDto!
    });

    res.json( Comprad );

  };



  public updateComprador = async( req: Request, res: Response ) => {
    const id_comprador = +req.params.id_comprador;
    const [error, updateCompradorDto] = UpdateCompradorDto.create({...req.body, id_comprador});
    if ( error ) return res.status(400).json({ error });
    
    const Comprad = await prisma.comprador.findFirst({
      where: { id_comprador }
    });
    if ( !Comprad ) return res.status( 404 ).json( { error: `Comprador with id ${ id_comprador } not found` } );
    const updatedComprador = await prisma.comprador.update({
      where: { id_comprador },
      data: updateCompradorDto!.values
    });
    res.json( updatedComprador );
  }


  public deleteComprador = async(req:Request, res: Response) => {
    const id_comprador = +req.params.id_comprador;
    const Comprad = await prisma.comprador.findFirst({
      where: { id_comprador }
    });

    if ( !Comprad ) return res.status(404).json({ error: `Comprador with id ${ id_comprador } not found` });
    const deleted = await prisma.comprador.delete({
      where: { id_comprador }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Comprador with id ${ id_comprador } not found` });
  }
}