export class ProductCart {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  pictureUrl: string;

  constructor(id: number, productName: string, quantity: number, price: number, pictureUrl: string) {
    this.id = id;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
    this.pictureUrl = pictureUrl;
  }
}
