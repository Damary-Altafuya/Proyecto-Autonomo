export class CreateProductoDto {
    private constructor(
      public readonly nombre_prod: string,
      public readonly descripcion_prod: string,
      public readonly categoria : string,
      public readonly precio_prod: GLfloat,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateProductoDto?]  {
  
      const { nombre_prod, descripcion_prod, categoria, precio_prod } = props;
  
      if ( !nombre_prod ) return ['name property is required', undefined];

      if ( !precio_prod ) return ['precio property is required', undefined];
  
      return [undefined, new CreateProductoDto(nombre_prod, descripcion_prod, categoria,precio_prod )];
    }
  }