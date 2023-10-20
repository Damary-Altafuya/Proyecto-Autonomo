export class CreateCompradorDto {
    private constructor(
      public readonly nombre_comp: string,
      public readonly direccion_comp: string,
      public readonly ciudad_comp: string,
      public readonly telefono_comp: number,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCompradorDto?] {
      const { nombre_comp, direccion_comp, ciudad_comp, telefono_comp } = props;
  
      if (!nombre_comp) return ['name property is required', undefined];
  
      return [undefined, new CreateCompradorDto(nombre_comp, direccion_comp, ciudad_comp, telefono_comp)];
    }
  }