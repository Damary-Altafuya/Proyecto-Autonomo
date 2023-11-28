export class CreateCarritoDto {
    private constructor(
      public readonly fecha_carrito: Date,
      public readonly ID_Comprador: number,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCarritoDto?] {
      const { fecha_carrito, ID_Comprador} = props;
  
      if (!fecha_carrito) return ['name property is required', undefined];
      if (!ID_Comprador) return ['name property is required', undefined];
  
      return [undefined, new CreateCarritoDto(fecha_carrito, ID_Comprador)];
    }
  }