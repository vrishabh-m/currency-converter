import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ExchangeRate } from '../models/currency';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
/**
 *
 * @export
 * @class CurrencySelectorComponent
 * @description This class is a shared class, which is responsible to update amount, currency.
 * And if user changes amount or currency, it passes the event to its parent component
 */
export class CurrencySelectorComponent {

  public inputLabel: string = '';
  public amount: number = 1;

  @Output()
  public amountChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public currencyChange: EventEmitter<ExchangeRate> = new EventEmitter<ExchangeRate>();

  @Input() set title(label: string) {
    this.inputLabel = label;
  }

  @Input() set convertedAmount(amount: number) {
    this.amount = amount;
  }

  @Input()
  public currencyList: ExchangeRate[];

  @Input()
  public selectedCurrency: ExchangeRate;

  public onAmountChange(amount: string): void {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.amountChange.emit(number);
    }
  }

  public onCurrencyChange(currency: string): void {
    const updatedCurrencyObj: ExchangeRate = {
      code: currency,
      value: null
    }

    for(let i = 0; i < this.currencyList.length; i++) {
      if(this.currencyList[i].code === currency) {
        updatedCurrencyObj.value = this.currencyList[i].value;
      }
    }

    this.currencyChange.emit(updatedCurrencyObj);
  }

}
