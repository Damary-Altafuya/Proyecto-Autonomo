export class UpdateCarritoDto {
    private constructor(
        public readonly id_carrito: number,
        public readonly fecha_carrito?: Date,
        public readonly ID_Comprador?: number,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.id_carrito) returnObj.id_carrito = this.id_carrito;
      if (this.fecha_carrito) returnObj.fecha_carrito = this.fecha_carrito;
      if (this.ID_Comprador) returnObj.ID_Comprador = this.ID_Comprador;
  
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCarritoDto?] {
      const { id_carrito, fecha_carrito, ID_Comprador } = props;
      let newName =fecha_carrito;
  
      if (!id_carrito || isNaN(Number(id_carrito))) {
        return ['id_carrito must be a valid number'];
      }
  
      if (!fecha_carrito ) {
        return ['At least one property must be provided'];
      }
      if (!ID_Comprador ) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateCarritoDto(id_carrito, fecha_carrito, ID_Comprador )];
    }
  }