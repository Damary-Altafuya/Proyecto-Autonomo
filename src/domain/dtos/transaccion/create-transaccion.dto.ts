export class CreateTransaccionDto {
    private constructor(
      public readonly cantidad_trans: number,
      public readonly fecha_trans: Date,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateTransaccionDto?] {
      const { cantidad_trans, fecha_trans } = props;
  
      if (!cantidad_trans) return ['cantidad property is required', undefined];
  
      return [undefined, new CreateTransaccionDto(cantidad_trans, fecha_trans)];
    }
  }