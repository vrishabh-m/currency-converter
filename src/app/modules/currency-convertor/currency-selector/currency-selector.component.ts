import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ExchangeRate } from '../models/currency';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent {

  public inputLabel: string = '';
  public amount: number = 1;

  @Output()
  public amountChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public currencyChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() set title(label: string) {
    this.inputLabel = label;
  }

  @Input() set convertedAmount(amount: number) {
    this.amount = amount;
  }

  @Input()
  public currencyList: ExchangeRate[];

  @Input()
  public selectedCurrency: string;

  public onAmountChange(amount: string): void {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.amountChange.emit(number);
    }
  }

  public onCurrencyChange(currency: string): void {
    this.currencyChange.emit(currency);
  }

}
