export class UsuarioEntity {

  constructor(
    public  id_usuario: number,
    public  nombre_usu?: string,
    public  apellido_usu?: string,
    public  email_usu?: string,
    public  password_usu?: string,
  ) {}

  public static fromObject( object: {[key: string]: any} ): UsuarioEntity {
    const { id_usuario, nombre_usu, apellido_usu, email_usu, password_usu, } = object;
    if ( !id_usuario ) throw 'Id is required';
    if (!nombre_usu) throw 'nombre_usu  property is required';
    if (!apellido_usu) throw 'apellido_usu  property is required';
    if (!email_usu) throw 'email_usu  property is required';
    if (!password_usu) throw 'password_usu  property is required';

      return new UsuarioEntity(id_usuario, nombre_usu, apellido_usu, email_usu, password_usu, )
  }

}


