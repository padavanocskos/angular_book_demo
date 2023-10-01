import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked,
    DoCheck,
    OnDestroy
{
  @Input('stock-item') public stock: Stock;
  @Input('index') index: number;
  @Output() private toggleFavoriteEvent = new EventEmitter<{
    stock: Stock;
    index: number;
  }>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('Stock-item: ', changes);
  }

  ngOnInit() {
    console.log('item after OnInit');
  }

  ngAfterViewInit(): void {
    console.log('Item after ViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Item after ViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('Item after ContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Item after ContentChecked');
  }

  ngDoCheck(): void {
    console.log('Item after DoCheck');
  }

  ngOnDestroy(): void {
    console.log('Item OnDestroy');
  }

  onToggleFavorite(index: number) {
    const stock = this.stock;
    this.toggleFavoriteEvent.emit({ stock, index });
  }

  changeStockPrice() {
    this.stock.price += 5;
  }
}
