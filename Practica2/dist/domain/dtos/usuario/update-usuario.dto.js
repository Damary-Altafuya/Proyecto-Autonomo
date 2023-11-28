"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUsuarioDto = void 0;
class UpdateUsuarioDto {
    constructor(id_usuario, nombre_usu, apellido_usu, email_usu, password_usu) {
        this.id_usuario = id_usuario;
        this.nombre_usu = nombre_usu;
        this.apellido_usu = apellido_usu;
        this.email_usu = email_usu;
        this.password_usu = password_usu;
    }
    get values() {
        const returnObj = {};
        if (this.nombre_usu)
            returnObj.nombre_comp = this.nombre_usu;
        if (this.apellido_usu)
            returnObj.apellido_usu = this.apellido_usu;
        if (this.email_usu)
            returnObj.ciudad_comp = this.email_usu;
        if (this.password_usu)
            returnObj.password_usu = this.password_usu;
        return returnObj;
    }
    static create(props) {
        const { id_usuario, nombre_usu, apellido_usu, email_usu, password_usu } = props;
        let newName = nombre_usu;
        if (!id_usuario || isNaN(Number(id_usuario))) {
            return ['id_usuario must be a valid number'];
        }
        if (!nombre_usu && !apellido_usu && !email_usu && !password_usu) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateUsuarioDto(id_usuario, nombre_usu, apellido_usu, email_usu, password_usu)];
    }
}
exports.UpdateUsuarioDto = UpdateUsuarioDto;
