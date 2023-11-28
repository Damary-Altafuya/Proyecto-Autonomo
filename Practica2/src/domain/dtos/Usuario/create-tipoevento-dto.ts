export class CreateUsuarioDto {
  private constructor(
    public readonly nombre_usu: string,
    public readonly apellido_usu: string,
    public readonly email_usu: string,
    public readonly password_usu: string,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateUsuarioDto?] {
    const { nombre_usu, apellido_usu, email_usu, password_usu } = props;

    if (!nombre_usu) return ['name property is required', undefined];
    if (!apellido_usu) return ['apellido_usu property is required', undefined];
    if (!email_usu) return ['email_usu property is required', undefined];
    if (!password_usu) return ['password property is required', undefined];

    return [undefined, new CreateUsuarioDto(nombre_usu, apellido_usu, email_usu, password_usu)];
  }
}