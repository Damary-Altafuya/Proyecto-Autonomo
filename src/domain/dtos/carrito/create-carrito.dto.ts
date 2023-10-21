export class CreateCarritoDto {
    private constructor(
      public readonly fecha_carrito: Date,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCarritoDto?] {
      const { fecha_carrito} = props;
  
      if (!fecha_carrito) return ['name property is required', undefined];
  
      return [undefined, new CreateCarritoDto(fecha_carrito )];
    }
  }