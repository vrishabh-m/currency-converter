import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ExchangeRatesFetchAction } from "./store/actions/exchange-rates";
import { AmountChangeFromAction, AmountChangeToAction } from "./store/actions/amount";
import { INPUT_LABEL_SELECT_CURRENCY, INPUT_LABEL_CONVERTED_AMOUNT } from '../../constant/app-constant';
import { ExchangeRate } from './models/currency';
import * as fromRoot from "./store";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  public titleSelectCurrency: string = INPUT_LABEL_SELECT_CURRENCY;
  public titleConvertedAmount: string = INPUT_LABEL_CONVERTED_AMOUNT;
  public fromAmount$: Observable<number>;
  public toAmount$: Observable<number>;
  public currencyRates$: Observable<ExchangeRate[]>;

  constructor(public store: Store<fromRoot.AppState>) {
    this.toAmount$ = this.store.select(fromRoot.getAmountToState);
    this.fromAmount$ = this.store.select(fromRoot.getAmountFromState);
    this.currencyRates$ = store.select(fromRoot.getExchangeRatesList);
  }

  ngOnInit() {
    this.store.dispatch(new ExchangeRatesFetchAction());
    this.toAmount$.subscribe(data => console.log(data));
    this.fromAmount$.subscribe(data => console.log(data));
  }

  public onAmountChange(amount: number, area: string): void {
    if(area === 'fromAmount') {
      this.store.dispatch(new AmountChangeFromAction(amount));
    } else if(area === 'toAmount') {
      this.store.dispatch(new AmountChangeToAction(amount));
    }
  }

  public onCurrencyChange(amount: number, area: string): void {
    // if(area === 'fromAmount') {
    //   this.store.dispatch(new AmountChangeFromAction(amount));
    // } else if(area === 'toAmount') {
    //   this.store.dispatch(new AmountChangeToAction(amount));
    // }
  }


}
