"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductoDto = void 0;
class CreateProductoDto {
    constructor(nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria) {
        this.nombre_prod = nombre_prod;
        this.descripcion_prod = descripcion_prod;
        this.categoria = categoria;
        this.precio_prod = precio_prod;
        this.ID_Artesano = ID_Artesano;
        this.ID_Categoria = ID_Categoria;
    }
    static create(props) {
        const { nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria } = props;
        if (!nombre_prod)
            return ['name property is required', undefined];
        if (!descripcion_prod)
            return ['name property is required', undefined];
        if (!categoria)
            return ['name property is required', undefined];
        if (!precio_prod)
            return ['name property is required', undefined];
        if (!ID_Artesano)
            return ['name property is required', undefined];
        if (!ID_Categoria)
            return ['name property is required', undefined];
        /*if (!precio_prod) return ['precio property is required', undefined];*/
        return [undefined, new CreateProductoDto(nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria)];
    }
}
exports.CreateProductoDto = CreateProductoDto;
