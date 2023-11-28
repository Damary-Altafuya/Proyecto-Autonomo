import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateProductoDto, UpdateProductoDto } from '../../domain/dtos';


export class ProductosController {
  //* DI
  constructor() { }
  public getProductos = async( req: Request, res: Response ) => {
    const producto = await prisma.producto.findMany();
    return res.json( producto );
  };




  public getProductoById = async( req: Request, res: Response ) => {
    const id_producto = +req.params.id_producto;
    //    localhost:3000/producto/1
    if ( isNaN( id_producto ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const Product = await prisma.producto.findFirst({
      where: { id_producto }
    });
    
    ( Product )
      ? res.json( Product )
      : res.status( 404 ).json( { error: `Producto with id ${ id_producto } not found` } );
  };





  public createProducto = async( req: Request, res: Response ) => {
    
    const [error, createProductoDto] = CreateProductoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const Product = await prisma.producto.create({
      data: createProductoDto!
    });

    res.json( Product );

  };



  public updateProducto = async( req: Request, res: Response ) => {
    const id_producto = +req.params.id_producto;
    const [error, updateProductoDto] = UpdateProductoDto.create({...req.body, id_producto});
    if ( error ) return res.status(400).json({ error });
    
    const Product = await prisma.producto.findFirst({
      where: { id_producto }
    });
    if ( !Product ) return res.status( 404 ).json( { error: `Producto with id ${ id_producto } not found` } );
    const updatedProducto = await prisma.producto.update({
      where: { id_producto },
      data: updateProductoDto!.values
    });
    res.json( updatedProducto );
  }


  public deleteProducto = async(req:Request, res: Response) => {
    const id_producto = +req.params.id_producto;
    const Product = await prisma.producto.findFirst({
      where: { id_producto }
    });

    if ( !Product ) return res.status(404).json({ error: `Producto with id ${ id_producto } not found` });
    const deleted = await prisma.producto.delete({
      where: { id_producto }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Producto with id ${ id_producto } not found` });
  }
}