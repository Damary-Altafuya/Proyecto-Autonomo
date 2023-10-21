export class UpdateCategoriaDto {
    private constructor(
        public readonly id_categoria: number,
        public readonly nombre_cat?: string,
      public readonly descripcion_cat?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre_cat) returnObj.nombre_cat = this.nombre_cat;
      if (this.descripcion_cat) returnObj.descripcion_cat = this.descripcion_cat;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCategoriaDto?] {
      const { id_categoria, nombre_cat, descripcion_cat} = props;
      let newName =nombre_cat;
  
      if (!id_categoria || isNaN(Number(id_categoria))) {
        return ['id_categoria must be a valid number'];
      }
  
      if (!nombre_cat && !descripcion_cat) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateCategoriaDto(id_categoria, nombre_cat, descripcion_cat)];
    }
  }