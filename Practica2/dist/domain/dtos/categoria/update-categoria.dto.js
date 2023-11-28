"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriaDto = void 0;
class UpdateCategoriaDto {
    constructor(id_categoria, nombre_cat, descripcion_cat) {
        this.id_categoria = id_categoria;
        this.nombre_cat = nombre_cat;
        this.descripcion_cat = descripcion_cat;
    }
    get values() {
        const returnObj = {};
        if (this.nombre_cat)
            returnObj.nombre_cat = this.nombre_cat;
        if (this.descripcion_cat)
            returnObj.descripcion_cat = this.descripcion_cat;
        return returnObj;
    }
    static create(props) {
        const { id_categoria, nombre_cat, descripcion_cat } = props;
        let newName = nombre_cat;
        if (!id_categoria || isNaN(Number(id_categoria))) {
            return ['id_categoria must be a valid number'];
        }
        if (!nombre_cat && !descripcion_cat) {
            return ['At least one property must be provided'];
        }
        return [undefined, new UpdateCategoriaDto(id_categoria, nombre_cat, descripcion_cat)];
    }
}
exports.UpdateCategoriaDto = UpdateCategoriaDto;
