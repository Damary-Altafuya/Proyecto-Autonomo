
export class CompradorEntity {

    constructor(
    public id_comprador: number,
    public nombre_comp?: string,
    public direccion_comp?: string,
    public ciudad_comp?: string,
    public telefono_comp?: string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): CompradorEntity {
      const { id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp } = object;
      if ( !id_comprador ) throw 'id is required';
      if ( !nombre_comp ) throw 'nombrecomp is required';
      if ( !direccion_comp ) throw 'direccioncomp is required';
      if ( !ciudad_comp ) throw 'cidudadcomp is required';
      if ( !telefono_comp ) throw 'telefonocomp is required';
        return new CompradorEntity(id_comprador, nombre_comp, direccion_comp, ciudad_comp, telefono_comp )
    }
  
  }
  
  
  