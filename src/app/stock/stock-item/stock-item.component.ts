import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stockClasses: {
    positive: boolean;
    negative: boolean;
    'large-change': boolean;
    'small-change': boolean;
  };

  constructor() {}

  ngOnInit() {
    this.stock = new Stock(
      'Stock ITEM',
      'TSC',
      80,
      90,
      'https://picsum.photos/id/21/200',
      10
    );
    let diff = this.stock.price / this.stock.previousPrice - 1;
    let largeChange = Math.abs(diff) > 0.05;
    this.stockClasses = {
      positive: !this.stock.isPositiveChange(),
      negative: this.stock.isPositiveChange(),
      'large-change': largeChange,
      'small-change': !largeChange,
    };
  }

  toggleFavorite(event: MouseEvent) {
    console.log('This is an event click', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
