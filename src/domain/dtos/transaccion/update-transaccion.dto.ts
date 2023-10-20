export class UpdateTransaccionDto {
    private constructor(
        public readonly id_transaccion: number,
        public readonly cantidad_trans?: number,
        public readonly fecha_trans?: Date,
      ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.cantidad_trans) returnObj.cantidad_trans = this.cantidad_trans;
      if (this.fecha_trans) returnObj.fecha_trans = this.fecha_trans;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateTransaccionDto?] {
      const { id_transaccion, cantidad_trans, fecha_trans } = props;
      let newName =cantidad_trans;
  
      if (!id_transaccion || isNaN(Number(id_transaccion))) {
        return ['id_transaccion must be a valid number'];
      }
  
      if (!cantidad_trans && !fecha_trans ) {
        return ['At least one property must be provided'];
      }
  
      return [undefined, new UpdateTransaccionDto(id_transaccion, cantidad_trans, fecha_trans)];
    }
  }