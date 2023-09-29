import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
})
export class StockItemComponent implements OnInit {
  public stocks: Stock[];
  constructor() {}

  ngOnInit() {
    this.stocks = [
      new Stock(
        'Stock ITEM',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/21/200',
        10
      ),
      new Stock(
        'Stock ITEM 2',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/20/200',
        10
      ),
      new Stock(
        'Stock ITEM 3',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/22/200',
        10
      ),
    ];
  }

  toggleFavorite(event: MouseEvent, index: number) {
    console.log('This is an event click', event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
