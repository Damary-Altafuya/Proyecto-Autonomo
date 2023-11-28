"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoriaDto = void 0;
class CreateCategoriaDto {
    constructor(nombre_cat, descripcion_cat) {
        this.nombre_cat = nombre_cat;
        this.descripcion_cat = descripcion_cat;
    }
    static create(props) {
        const { nombre_cat, descripcion_cat } = props;
        if (!nombre_cat)
            return ['nombre de la categoria property is required', undefined];
        if (!descripcion_cat)
            return ['nombre de la categoria property is required', undefined];
        return [undefined, new CreateCategoriaDto(nombre_cat, descripcion_cat)];
    }
}
exports.CreateCategoriaDto = CreateCategoriaDto;
