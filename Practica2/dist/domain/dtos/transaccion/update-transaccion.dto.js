"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransaccionDto = void 0;
class UpdateTransaccionDto {
    constructor(id_transaccion, cantidad_trans, fecha_trans, ID_Comprador, ID_Producto) {
        this.id_transaccion = id_transaccion;
        this.cantidad_trans = cantidad_trans;
        this.fecha_trans = fecha_trans;
        this.ID_Comprador = ID_Comprador;
        this.ID_Producto = ID_Producto;
    }
    get values() {
        const returnObj = {};
        if (this.cantidad_trans)
            returnObj.cantidad_trans = this.cantidad_trans;
        if (this.fecha_trans)
            returnObj.fecha_trans = this.fecha_trans;
        if (this.ID_Comprador)
            returnObj.ID_Comprador = this.ID_Comprador;
        if (this.ID_Producto)
            returnObj.ID_Producto = this.ID_Producto;
        return returnObj;
    }
    static create(props) {
        const { id_transaccion, cantidad_trans, fecha_trans, ID_Comprador, ID_Producto } = props;
        let newName = cantidad_trans;
        if (!id_transaccion || isNaN(Number(id_transaccion))) {
            return ['id_transaccion must be a valid number'];
        }
        if (!cantidad_trans && !fecha_trans && !ID_Comprador && !ID_Producto) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateTransaccionDto(id_transaccion, cantidad_trans, fecha_trans, ID_Comprador, ID_Producto)];
    }
}
exports.UpdateTransaccionDto = UpdateTransaccionDto;
