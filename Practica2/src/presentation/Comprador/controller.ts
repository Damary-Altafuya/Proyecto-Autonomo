import { Request, Response } from 'express';
import { CreateCompradorDto, UpdateCompradorDto  } from '../../domain/dtos';
import { CreateComprador, DeleteComprador, GetComprador, GetCompradors , CompradorRepository, UpdateComprador } from '../../domain';


export class CompradorController {

  //* DI
  constructor(
    private readonly CompradorRepository: CompradorRepository,
  ) { }


  public getComprador = ( req: Request, res: Response ) => {

    new GetCompradors( this.CompradorRepository )
      .execute()
      .then( comprador => res.json( comprador ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getCompradorById = ( req: Request, res: Response ) => {
    const id_comprador = +req.params.id_comprador;

    new GetComprador( this.CompradorRepository )
      .execute( id_comprador )
      .then( comprador => res.json( comprador ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createComprador = ( req: Request, res: Response ) => {
    const [ error, createCompradorDto ] = CreateCompradorDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateComprador( this.CompradorRepository )
      .execute( createCompradorDto! )
      .then( comprador => res.json( comprador ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateComprador = ( req: Request, res: Response ) => {
    const id_comprador = +req.params.id_comprador;
    const [ error, updateCompradorDto ] = UpdateCompradorDto.create( { ...req.body, id_comprador } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateComprador( this.CompradorRepository )
      .execute( updateCompradorDto! )
      .then( comprador => res.json( comprador ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteComprador = ( req: Request, res: Response ) => {
    const id_comprador = +req.params.id_comprador;

    new DeleteComprador( this.CompradorRepository )
      .execute( id_comprador )
      .then( comprador => res.json( comprador ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 