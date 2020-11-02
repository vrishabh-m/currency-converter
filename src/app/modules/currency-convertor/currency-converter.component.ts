import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CurrenciesFetchAction } from "./actions/currency";
import { AmountChangeFromAction, AmountChangeToAction } from "./actions/amount";
import { INPUT_LABEL_SELECT_CURRENCY, INPUT_LABEL_CONVERTED_AMOUNT } from '../../constant/app-constant';
import { Currency } from './models/currency';
import * as fromRoot from "./reducers";

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
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.toAmount$ = store.select(fromRoot.getAmountToState);
    this.currencyRates$ = store.select(fromRoot.getExchangeRatesList);
  }

  ngOnInit() {
    this.store.dispatch(new CurrenciesFetchAction());
  }

  public onAmountChange(amount: number, area: string): void {
    if(area === 'fromAmount') {
      this.store.dispatch(new AmountChangeFromAction(amount));
    } else if(area === 'toAmount') {
      this.store.dispatch(new AmountChangeToAction(amount));
    }
  }

  public onCurrencyChange(amount: number, area: string): void {
    if(area === 'fromAmount') {
      this.store.dispatch(new AmountChangeFromAction(amount));
    } else if(area === 'toAmount') {
      this.store.dispatch(new AmountChangeToAction(amount));
    }
  }


}
