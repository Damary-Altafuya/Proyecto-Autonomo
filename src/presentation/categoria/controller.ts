import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateCompradorDto, UpdateCompradorDto } from '../../domain/dtos';


export class CategoriesController {
  //* DI
  constructor() { }
  public getcategorias = async( req: Request, res: Response ) => {
    const categoria = await prisma.categoria.findMany();
    return res.json( categoria );
  };




  public getCategoriaById = async( req: Request, res: Response ) => {
    const id_categoria = +req.params.id_categoria;
    //    localhost:3000/producto/1
    if ( isNaN( id_categoria ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const categ = await prisma.categoria.findFirst({
      where: { id_categoria }
    });
    
    ( categ )
      ? res.json( categ )
      : res.status( 404 ).json( { error: `categoria with id ${ id_categoria } not found` } );
  };





  public createCategoria = async( req: Request, res: Response ) => {
    
    const [error, createCategoriaDto] = CreateCompradorDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const categ = await prisma.categoria.create({
      data: createCategoriaDto!
    });

    res.json( categ );

  };



  public updateCategoria = async( req: Request, res: Response ) => {
    const id_categoria = +req.params.id_categoria;
    const [error, updateCategoriaDto] = UpdateCompradorDto.create({...req.body, id_categoria});
    if ( error ) return res.status(400).json({ error });
    
    const categ = await prisma.categoria.findFirst({
      where: { id_categoria }
    });
    if ( !categ ) return res.status( 404 ).json( { error: `categoria with id ${ id_categoria } not found` } );
    const updateCategoria = await prisma.categoria.update({
      where: { id_categoria },
      data: updateCategoriaDto!.values
    });
    res.json( updateCategoria );
  }


  public deleteCategoria = async(req:Request, res: Response) => {
    const id_categoria = +req.params.id_categoria;
    const categ = await prisma.categoria.findFirst({
      where: { id_categoria }
    });

    if ( !categ ) return res.status(404).json({ error: `categoria with id ${ id_categoria } not found` });
    const deleted = await prisma.categoria.delete({
      where: { id_categoria }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `categoria with id ${ id_categoria } not found` });
  }
}