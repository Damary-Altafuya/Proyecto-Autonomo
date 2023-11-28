"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCarritoDto = void 0;
class CreateCarritoDto {
    constructor(fecha_carrito, ID_Comprador) {
        this.fecha_carrito = fecha_carrito;
        this.ID_Comprador = ID_Comprador;
    }
    static create(props) {
        const { fecha_carrito, ID_Comprador } = props;
        if (!fecha_carrito)
            return ['name property is required', undefined];
        if (!ID_Comprador)
            return ['name property is required', undefined];
        return [undefined, new CreateCarritoDto(fecha_carrito, ID_Comprador)];
    }
}
exports.CreateCarritoDto = CreateCarritoDto;
