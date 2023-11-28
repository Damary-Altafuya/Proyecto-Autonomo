export class CreateCategoriaDto {
    private constructor(
      public readonly nombre_cat: string,
      public readonly descripcion_cat: string,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCategoriaDto?] {
      const { nombre_cat, descripcion_cat} = props;
  
      if (!nombre_cat) return ['nombre de la categoria property is required', undefined];
      if (!descripcion_cat) return ['nombre de la categoria property is required', undefined];
  
      return [undefined, new CreateCategoriaDto(nombre_cat, descripcion_cat )];
    }
  }