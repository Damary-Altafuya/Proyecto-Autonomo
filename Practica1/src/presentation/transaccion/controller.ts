import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTransaccionDto, UpdateTransaccionDto } from '../../domain/dtos';


export class TransaccionesController {
  //* DI
  constructor() { }
  public getTransacciones = async( req: Request, res: Response ) => {
    const transaccion = await prisma.transaccion.findMany();
    return res.json( transaccion );
  };




  public getTransaccionById = async( req: Request, res: Response ) => {
    const id_transaccion = +req.params.id_transaccion;
    //    localhost:3000/producto/1
    if ( isNaN( id_transaccion ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const transac = await prisma.transaccion.findFirst({
      where: { id_transaccion }
    });
    
    ( transac )
      ? res.json( transac)
      : res.status( 404 ).json( { error: `Transaccion with id ${ id_transaccion } not found` } );
  };





  public createTransaccion = async( req: Request, res: Response ) => {
    
    const [error, createTransaccionDto] = CreateTransaccionDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const transac = await prisma.transaccion.create({
      data: createTransaccionDto!
    });

    res.json( transac );

  };



  public updateTransaccion = async( req: Request, res: Response ) => {
    const id_transaccion = +req.params.id_transaccion;
    const [error, updateTransaccionDto] = UpdateTransaccionDto.create({...req.body, id_transaccion});
    if ( error ) return res.status(400).json({ error });
    
    const transac = await prisma.transaccion.findFirst({
      where: { id_transaccion }
    });
    if ( !transac ) return res.status( 404 ).json( { error: `Transaccion with id ${ id_transaccion } not found` } );
    const updatedTransaccion = await prisma.transaccion.update({
      where: { id_transaccion },
      data: updateTransaccionDto!.values
    });
    res.json( updatedTransaccion );
  }


  public deleteTransaccion = async(req:Request, res: Response) => {
    const id_transaccion = +req.params.id_transaccion;
    const transac = await prisma.transaccion.findFirst({
      where: { id_transaccion }
    });

    if ( !transac ) return res.status(404).json({ error: `Transaccion with id ${ id_transaccion } not found` });
    const deleted = await prisma.transaccion.delete({
      where: { id_transaccion }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Comprador with id ${ id_transaccion } not found` });
  }
}