import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateArtesanoDto, UpdateArtesanoDto } from '../../domain/dtos';


export class ArtesanosController {
  //* DI
  constructor() { }
  public getartesanos = async( req: Request, res: Response ) => {
    const artesano = await prisma.artesano.findMany();
    return res.json( artesano );
  };




  public getArtesanoById = async( req: Request, res: Response ) => {
    const id_artesano = +req.params.id_artesano;
    //    localhost:3000/producto/1
    if ( isNaN( id_artesano ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const artesa = await prisma.artesano.findFirst({
      where: { id_artesano }
    });
    
    ( artesa )
      ? res.json( artesa )
      : res.status( 404 ).json( { error: `artesano with id ${ id_artesano } not found` } );
  };





  public createArtesano = async( req: Request, res: Response ) => {
    
    const [error, createArtesanoDto] = CreateArtesanoDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const artesa = await prisma.artesano.create({
      data: createArtesanoDto!
    });

    res.json( artesa );

  };



  public updateArtesano = async( req: Request, res: Response ) => {
    const id_artesano = +req.params.id_artesano;
    const [error, updateArtesanoDto] = UpdateArtesanoDto.create({...req.body, id_artesano});
    if ( error ) return res.status(400).json({ error });
    
    const artesa = await prisma.artesano.findFirst({
      where: { id_artesano }
    });
    if ( !artesa ) return res.status( 404 ).json( { error: `artesano with id ${ id_artesano } not found` } );
    const updatedArtesano = await prisma.artesano.update({
      where: { id_artesano },
      data: updateArtesanoDto!.values
    });
    res.json( updatedArtesano );
  }


  public deleteArtesano = async(req:Request, res: Response) => {
    const id_artesano = +req.params.id_artesano;
    const artesa = await prisma.artesano.findFirst({
      where: { id_artesano }
    });

    if ( !artesa ) return res.status(404).json({ error: `artesano with id ${ id_artesano } not found` });
    const deleted = await prisma.artesano.delete({
      where: { id_artesano }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `artesano with id ${ id_artesano } not found` });
  }
}