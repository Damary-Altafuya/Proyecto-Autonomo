export class CreateProductoDto {
  private constructor(
    public readonly nombre_prod: string,
    public readonly descripcion_prod: string,
    public readonly categoria: string,
    public readonly precio_prod: number,
    public readonly ID_Artesano: number,
    public readonly ID_Categoria: number,
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateProductoDto?] {
    const { nombre_prod, descripcion_prod, categoria, precio_prod, ID_Artesano, ID_Categoria } = props;

    if (!nombre_prod) return ['name property is required', undefined];
    if (!descripcion_prod) return ['name property is required', undefined];
    if (!categoria) return ['name property is required', undefined];
    if (!precio_prod) return ['name property is required', undefined];
    if (!ID_Artesano) return ['name property is required', undefined];
    if (!ID_Categoria) return ['name property is required', undefined];
    /*if (!precio_prod) return ['precio property is required', undefined];*/

    return [undefined, new CreateProductoDto(nombre_prod, descripcion_prod, categoria, precio_prod,ID_Artesano, ID_Categoria)];
  }
}