export class Stock {
  favorite: boolean = false;

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public image: string,
    public onSale: number
  ) {}

  isPositiveChange() {
    return this.previousPrice >= this.price;
  }

  isOnSale() {
    return this.onSale > 0;
  }
}
