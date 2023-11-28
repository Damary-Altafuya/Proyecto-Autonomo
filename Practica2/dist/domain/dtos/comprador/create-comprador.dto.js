"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompradorDto = void 0;
class CreateCompradorDto {
    constructor(nombre_comp, direccion_comp, ciudad_comp, telefono_comp) {
        this.nombre_comp = nombre_comp;
        this.direccion_comp = direccion_comp;
        this.ciudad_comp = ciudad_comp;
        this.telefono_comp = telefono_comp;
    }
    static create(props) {
        const { nombre_comp, direccion_comp, ciudad_comp, telefono_comp } = props;
        if (!nombre_comp)
            return ['name property is required', undefined];
        return [undefined, new CreateCompradorDto(nombre_comp, direccion_comp, ciudad_comp, telefono_comp)];
    }
}
exports.CreateCompradorDto = CreateCompradorDto;
