export class UpdateCompradorDto {
    private constructor(
        public readonly id_comprador: number,
        public readonly nombre_comp?: string,
        public readonly direccion_comp?: string,
        public readonly ciudad_comp?: string,
        public readonly telefono_comp?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre_comp) returnObj.nombre_comp = this.nombre_comp;
      if (this.direccion_comp) returnObj.direccion_comp = this.direccion_comp;
      if (this.ciudad_comp) returnObj.ciudad_comp = this.ciudad_comp;
      if (this.telefono_comp) returnObj.telefono_comp = this.telefono_comp;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCompradorDto?] {
      const { id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp } = props;
      let newName =nombre_comp;
  
      if (!id_comprador || isNaN(Number(id_comprador))) {
        return ['id_comprador must be a valid number'];
      }
  
      if (!nombre_comp && !direccion_comp && !ciudad_comp && !telefono_comp) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateCompradorDto(id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp)];
    }
  }