"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArtesanoDto = void 0;
class CreateArtesanoDto {
    constructor(nombre_art, descripcion_art, ubicacion_art, telefono_art) {
        this.nombre_art = nombre_art;
        this.descripcion_art = descripcion_art;
        this.ubicacion_art = ubicacion_art;
        this.telefono_art = telefono_art;
    }
    static create(props) {
        const { nombre_art, descripcion_art, ubicacion_art, telefono_art } = props;
        if (!nombre_art)
            return ['name property is required', undefined];
        return [undefined, new CreateArtesanoDto(nombre_art, descripcion_art, ubicacion_art, telefono_art)];
    }
}
exports.CreateArtesanoDto = CreateArtesanoDto;
