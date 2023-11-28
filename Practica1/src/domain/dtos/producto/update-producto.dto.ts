export class UpdateProductoDto {
    private constructor(
      public readonly id_producto: number,
      public readonly nombre_prod?: string,
      public readonly descripcion_prod?: string,
      public readonly categoria?: string,
      public readonly precio_prod?: number,
      public readonly ID_Artesano?: number,
      public readonly ID_Categoria?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre_prod) returnObj.nombre_prod = this.nombre_prod;
      if (this.descripcion_prod) returnObj.descripcion_prod = this.descripcion_prod;
      if (this.categoria) returnObj.categoria = this.categoria;
      if (this.precio_prod) returnObj.precio_prod = this.precio_prod;
      if (this.ID_Artesano) returnObj.ID_Artesano = this.ID_Artesano;
      if (this.ID_Categoria) returnObj.ID_Categoria= this.ID_Categoria;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateProductoDto?] {
      const { id_producto, nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria } = props;
      let newName =nombre_prod;
  
      if (!id_producto || isNaN(Number(id_producto))) {
        return ['id_producto must be a valid number'];
      }
  
      if (!nombre_prod && !descripcion_prod && !categoria && !precio_prod && !ID_Artesano && ! ID_Categoria) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateProductoDto(id_producto, nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria)];
    }
  }