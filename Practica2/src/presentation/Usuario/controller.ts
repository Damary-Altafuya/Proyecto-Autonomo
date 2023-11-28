import { Request, Response } from 'express';
import { CreateUsuarioDto, UpdateUsuarioDto } from '../../domain/dtos';
import { CreateUsuario, deleteUsuario, GetUsuario, GetUsuarios, UsuarioRepository, Updateusuario } from '../../domain';


export class TipoeventoController {

  //* DI
  constructor(
    private readonly UsuarioRepository: UsuarioRepository,
  ) { }


  public getUsuarios = ( req: Request, res: Response ) => {

    new GetUsuarios( this.UsuarioRepository )
      .execute()
      .then( usuario => res.json( usuario ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getUsuarioById = ( req: Request, res: Response ) => {
    const id_usuario = +req.params.id_usuario;

    new GetUsuario( this.UsuarioRepository )
      .execute( id_usuario )
      .then( usuario => res.json( usuario ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public createUsuario = ( req: Request, res: Response ) => {
    const [ error, createUsuarioDto ] = CreateUsuarioDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateUsuario( this.UsuarioRepository )
      .execute( createUsuarioDto! )
      .then( usuario => res.json( usuario ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateusuario = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateusuariodto ] = UpdateUsuarioDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new Updateusuario( this.UsuarioRepository )
      .execute( updateusuariodto! )
      .then( usuario => res.json( usuario ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteUsuario = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new deleteUsuario( this.UsuarioRepository )
      .execute( id )
      .then( usuario => res.json( usuario ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 