"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompradorDto = void 0;
class UpdateCompradorDto {
    constructor(id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp) {
        this.id_comprador = id_comprador;
        this.nombre_comp = nombre_comp;
        this.direccion_comp = direccion_comp;
        this.ciudad_comp = ciudad_comp;
        this.telefono_comp = telefono_comp;
    }
    get values() {
        const returnObj = {};
        if (this.nombre_comp)
            returnObj.nombre_comp = this.nombre_comp;
        if (this.direccion_comp)
            returnObj.direccion_comp = this.direccion_comp;
        if (this.ciudad_comp)
            returnObj.ciudad_comp = this.ciudad_comp;
        if (this.telefono_comp)
            returnObj.telefono_comp = this.telefono_comp;
        return returnObj;
    }
    static create(props) {
        const { id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp } = props;
        let newName = nombre_comp;
        if (!id_comprador || isNaN(Number(id_comprador))) {
            return ['id_comprador must be a valid number'];
        }
        if (!nombre_comp && !direccion_comp && !ciudad_comp && !telefono_comp) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCompradorDto(id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp)];
    }
}
exports.UpdateCompradorDto = UpdateCompradorDto;
