"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArtesanoDto = void 0;
class UpdateArtesanoDto {
    constructor(id_artesano, nombre_art, descripcion_art, ubicacion_art, telefono_art) {
        this.id_artesano = id_artesano;
        this.nombre_art = nombre_art;
        this.descripcion_art = descripcion_art;
        this.ubicacion_art = ubicacion_art;
        this.telefono_art = telefono_art;
    }
    get values() {
        const returnObj = {};
        if (this.nombre_art)
            returnObj.nombre_art = this.nombre_art;
        if (this.descripcion_art)
            returnObj.descripcion_art = this.descripcion_art;
        if (this.ubicacion_art)
            returnObj.ubicacion_art = this.ubicacion_art;
        if (this.telefono_art)
            returnObj.telefono_art = this.telefono_art;
        return returnObj;
    }
    static create(props) {
        const { id_artesano, nombre_art, descripcion_art, ubicacion_art, telefono_art } = props;
        let newName = nombre_art;
        if (!id_artesano || isNaN(Number(id_artesano))) {
            return ['id_comprador must be a valid number'];
        }
        if (!nombre_art && !descripcion_art && !ubicacion_art && !telefono_art) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateArtesanoDto(id_artesano, nombre_art, descripcion_art, ubicacion_art, telefono_art)];
    }
}
exports.UpdateArtesanoDto = UpdateArtesanoDto;
