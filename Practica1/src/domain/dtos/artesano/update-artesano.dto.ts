export class UpdateArtesanoDto {
    private constructor(
        public readonly id_artesano: number,
        public readonly nombre_art?: string,
      public readonly descripcion_art?: string,
      public readonly ubicacion_art?: string,
      public readonly telefono_art?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre_art) returnObj.nombre_art = this.nombre_art;
      if (this.descripcion_art) returnObj.descripcion_art = this.descripcion_art;
      if (this.ubicacion_art) returnObj.ubicacion_art = this.ubicacion_art;
      if (this.telefono_art) returnObj.telefono_art = this.telefono_art;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateArtesanoDto?] {
      const { id_artesano, nombre_art, descripcion_art, ubicacion_art, telefono_art } = props;
      let newName =nombre_art;
  
      if (!id_artesano || isNaN(Number(id_artesano))) {
        return ['id_comprador must be a valid number'];
      }
  
      if (!nombre_art && !descripcion_art && !ubicacion_art && !telefono_art) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateArtesanoDto(id_artesano, nombre_art, descripcion_art, ubicacion_art, telefono_art)];
    }
  }