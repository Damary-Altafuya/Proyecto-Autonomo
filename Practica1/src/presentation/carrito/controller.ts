import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCarritoDto, UpdateCarritoDto } from '../../domain/dtos';


export class CarritousController {
  //* DI
  constructor() { }
  public getcarritos = async( req: Request, res: Response ) => {
    const carrito = await prisma.carrito.findMany();
    return res.json( carrito );
  };




  public getCarritoById = async( req: Request, res: Response ) => {
    const id_carrito = +req.params.id_carrito;
    //    localhost:3000/producto/1
    if ( isNaN( id_carrito ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const car = await prisma.carrito.findFirst({
      where: { id_carrito }
    });
    
    ( car )
      ? res.json( car )
      : res.status( 404 ).json( { error: `Comprador with id ${ id_carrito } not found` } );
  };





  public createCarrito = async( req: Request, res: Response ) => {
    
    const [error, createCarritoDto] = CreateCarritoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const car = await prisma.carrito.create({
      data: createCarritoDto!
    });

    res.json( car );

  };



  public updateCarrito = async( req: Request, res: Response ) => {
    const id_carrito = +req.params.id_carrito;
    const [error, updateCarritoDto] = UpdateCarritoDto.create({...req.body, id_carrito});
    if ( error ) return res.status(400).json({ error });
    
    const car = await prisma.carrito.findFirst({
      where: { id_carrito }
    });
    if ( !car ) return res.status( 404 ).json( { error: `carrito with id ${ id_carrito } not found` } );
    const updatedCarrito = await prisma.carrito.update({
      where: { id_carrito },
      data: updateCarritoDto!.values
    });
    res.json( updatedCarrito );
  }


  public deleteCarrito = async(req:Request, res: Response) => {
    const id_carrito = +req.params.id_carrito;
    const car = await prisma.carrito.findFirst({
      where: { id_carrito }
    });

    if ( !car ) return res.status(404).json({ error: `carrito with id ${ id_carrito } not found` });
    const deleted = await prisma.carrito.delete({
      where: { id_carrito }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `carrito with id ${ id_carrito } not found` });
  }
}