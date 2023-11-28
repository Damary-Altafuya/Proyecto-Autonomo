"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransaccionDto = void 0;
class CreateTransaccionDto {
    constructor(cantidad_trans, fecha_trans, ID_Comprador, ID_Producto) {
        this.cantidad_trans = cantidad_trans;
        this.fecha_trans = fecha_trans;
        this.ID_Comprador = ID_Comprador;
        this.ID_Producto = ID_Producto;
    }
    static create(props) {
        const { cantidad_trans, fecha_trans, ID_Comprador, ID_Producto } = props;
        if (!cantidad_trans)
            return ['cantidad property is required', undefined];
        if (!fecha_trans)
            return ['cantidad property is required', undefined];
        if (!ID_Comprador)
            return ['cantidad property is required', undefined];
        if (!ID_Producto)
            return ['cantidad property is required', undefined];
        return [undefined, new CreateTransaccionDto(cantidad_trans, fecha_trans, ID_Comprador, ID_Producto)];
    }
}
exports.CreateTransaccionDto = CreateTransaccionDto;
