export class CreateArtesanoDto {
    private constructor(
      public readonly nombre_art: string,
      public readonly descripcion_art: string,
      public readonly ubicacion_art: string,
      public readonly telefono_art: string,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateArtesanoDto?] {
      const { nombre_art, descripcion_art, ubicacion_art, telefono_art } = props;
  
      if (!nombre_art) return ['name property is required', undefined];
  
      return [undefined, new CreateArtesanoDto(nombre_art, descripcion_art, ubicacion_art, telefono_art)];
    }
  }