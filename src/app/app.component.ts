import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    AfterContentInit
{
  public stocks: Stock[] = [];
  public title = 'stock-market';

  ngOnChanges(changes: SimpleChanges) {
    console.log('App on Changes:', changes);
  }

  ngOnInit() {
    this.stocks = [
      new Stock(
        1,
        'Stock ITEM',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/21/200',
        10
      ),
      new Stock(
        2,
        'Stock ITEM 2',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/20/200',
        5
      ),
      new Stock(
        3,
        'Stock ITEM 3',
        'TSC',
        80,
        90,
        'https://picsum.photos/id/22/200'
      ),
    ];
  }

  ngAfterViewInit(): void {
    console.log('App after ViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('App after ViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('App after ContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('App after ContentChecked');
  }

  ngDoCheck(): void {
    console.log('App after DoCheck');
  }

  ngOnDestroy(): void {
    console.log('App OnDestroy');
  }

  onToggleFavorite(stock: { stock: Stock; index: number }) {
    this.stocks[stock.index].isFavorite = !this.stocks[stock.index].isFavorite;
  }

  changeStockObject() {
    this.stocks.push(
      new Stock(4, 'Hello Bello', 'HLB', 15, 12, 'https://picsum.photos/200')
    );
  }

  changeStockPrice() {
    this.stocks[1].price += 10;
  }
}
