export class CreateTransaccionDto {
    private constructor(
      public readonly cantidad_trans: number,
      public readonly fecha_trans: Date,
      public readonly ID_Comprador: number,
      public readonly ID_Producto: number,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateTransaccionDto?] {
      const { cantidad_trans, fecha_trans, ID_Comprador, ID_Producto } = props;
  
      if (!cantidad_trans) return ['cantidad property is required', undefined];
      if (!fecha_trans) return ['cantidad property is required', undefined];
      if (!ID_Comprador) return ['cantidad property is required', undefined];
      if (!ID_Producto) return ['cantidad property is required', undefined];
  
      return [undefined, new CreateTransaccionDto(cantidad_trans, fecha_trans, ID_Comprador, ID_Producto)];
    }
  }