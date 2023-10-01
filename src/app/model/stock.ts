interface IStock {
  id: number;
  name: string;
  code: string;
  price: number;
  previousPrice: number;
  image: string;
  onSale: number;
  isFavorite: boolean;
}
export class Stock implements IStock {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public price: number = 0,
    public previousPrice = 0,
    public image: string,
    public onSale = 0,
    public isFavorite = false
  ) {}

  isPositiveChange() {
    return this.previousPrice >= this.price;
  }

  isOnSale() {
    return this.onSale > 0;
  }
}
