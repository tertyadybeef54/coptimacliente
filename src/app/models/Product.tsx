class Product {
    public _id: string;
    public nameProduct: string;
    public priceProduct: number;
    public dateUpdateProduct: Date;
    public presentationProduct: string;
    public addressProduct: string;
    public nameStore: string;
    public stateProduct: number;
  
    constructor(
        id: string,
        nom: string,
        pri: number,
        dat: Date,
        pre: string,
        add: string,
        nam: string,
        est: number
      ) {
        this._id = id;
        this.nameProduct = nom;
        this.priceProduct = pri;
        this.dateUpdateProduct = dat;
        this.presentationProduct = pre;
        this.addressProduct = add;
        this.nameStore = nam;
        this.stateProduct = est;
      }
  }
  
  export default Product;