import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ExchangeRatesFetchAction } from "./store/actions/exchange-rates";
import { AmountChangeFromAction, AmountChangeToAction, AmountUpdateInterface } from "./store/actions/amount";
import { INPUT_LABEL_SELECT_CURRENCY, INPUT_LABEL_CONVERTED_AMOUNT, BASE_CURRENCY } from '../../constant/app-constant';
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
  public fromCurrency$: Observable<ExchangeRate>;
  public toCurrency$: Observable<ExchangeRate>;
  public currencyRates$: Observable<ExchangeRate[]>;
  private selectedFromCurrency: ExchangeRate;
  private selectedToCurrency: ExchangeRate;
  private baseCurrency: string = BASE_CURRENCY;

  constructor(public store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.initializeData();
    this.dispatchData(new ExchangeRatesFetchAction(BASE_CURRENCY));
    this.initializeListeners();
  }

  public initializeData(): void {
    this.toAmount$ = this.store.select(fromRoot.getAmountToState);
    this.fromAmount$ = this.store.select(fromRoot.getAmountFromState);
    this.fromCurrency$ = this.store.select(fromRoot.getSelectedCurrency_From);
    this.toCurrency$ = this.store.select(fromRoot.getSelectedCurrency_To);
    this.currencyRates$ = this.store.select(fromRoot.getExchangeRatesList);
  }

  private dispatchData(action: any): void {
    this.store.dispatch(action);
  }

  private initializeListeners(): void {
    this.fromCurrency$.subscribe((curr: ExchangeRate) => this.selectedFromCurrency = curr);
    this.toCurrency$.subscribe((curr: ExchangeRate) => this.selectedToCurrency = curr);
  }

  public onAmountChange(amount: number, area: string): void {
    const amtPayload: AmountUpdateInterface = {
      amount: amount,
      currencyDiff: null
    }

    if(area === 'fromAmount') {
      if(this.baseCurrency != this.selectedFromCurrency.code) {
        this.dispatchData(new ExchangeRatesFetchAction(this.selectedFromCurrency.code));
        this.baseCurrency = this.selectedFromCurrency.code;
      }
      amtPayload.currencyDiff = this.selectedToCurrency;
      this.dispatchData(new AmountChangeFromAction(amtPayload));
    } else if(area === 'toAmount') {
      if(this.baseCurrency != this.selectedToCurrency.code) {
        this.dispatchData(new ExchangeRatesFetchAction(this.selectedToCurrency.code));
        this.baseCurrency = this.selectedToCurrency.code;
      }
      amtPayload.currencyDiff = this.selectedFromCurrency;
      // console.error(amtPayload);
      this.dispatchData(new AmountChangeToAction(amtPayload));
    }
  }

  public onCurrencyChange(code: ExchangeRate, area: string): void {
    console.error(code);
    // if(area === 'fromAmount') {
    //   this.store.dispatch(new AmountChangeFromAction(amount));
    // } else if(area === 'toAmount') {
    //   this.store.dispatch(new AmountChangeToAction(amount));
    // }
  }


}
