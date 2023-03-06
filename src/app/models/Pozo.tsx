class Pozo {
    public id: number;
    public nombrePozo: string;
    public ubicacion: string;
    public comentario: string;
    public operadora: string;
  
    constructor(
        id: number,
        nom: string,
        pri: string,
        dat: string,
        est: string
      ) {
        this.id = id;
        this.nombrePozo = nom;
        this.ubicacion = pri;
        this.comentario = dat;
        this.operadora = est;
      }
  }
  
  export default Pozo;