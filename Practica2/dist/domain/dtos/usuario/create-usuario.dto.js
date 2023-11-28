"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioDto = void 0;
class CreateUsuarioDto {
    constructor(nombre_usu, apellido_usu, email_usu, password_usu) {
        this.nombre_usu = nombre_usu;
        this.apellido_usu = apellido_usu;
        this.email_usu = email_usu;
        this.password_usu = password_usu;
    }
    static create(props) {
        const { nombre_usu, apellido_usu, email_usu, password_usu } = props;
        if (!nombre_usu)
            return ['name property is required', undefined];
        if (!password_usu)
            return ['password property is required', undefined];
        return [undefined, new CreateUsuarioDto(nombre_usu, apellido_usu, email_usu, password_usu)];
    }
}
exports.CreateUsuarioDto = CreateUsuarioDto;
