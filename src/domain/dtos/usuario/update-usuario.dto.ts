export class UpdateUsuarioDto {
    private constructor(
        public readonly id_usuario: number,
        public readonly nombre_usu?: string,
        public readonly apellido_usu?: string,
        public readonly email_usu?: string,
        public readonly password_usu?: number,
      ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre_usu) returnObj.nombre_comp = this.nombre_usu;
      if (this.apellido_usu) returnObj.apellido_usu = this.apellido_usu;
      if (this.email_usu) returnObj.ciudad_comp = this.email_usu;
      if (this.password_usu) returnObj.password_usu = this.password_usu;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateUsuarioDto ?] {
      const { id_usuario, nombre_usu, apellido_usu, email_usu, password_usu } = props;
      let newName =nombre_usu;
  
      if (!id_usuario || isNaN(Number(id_usuario))) {
        return ['id_usuario must be a valid number'];
      }
  
      if (!nombre_usu && !apellido_usu && !email_usu && !password_usu) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateUsuarioDto (id_usuario, nombre_usu, apellido_usu, email_usu, password_usu)];
    }
  }