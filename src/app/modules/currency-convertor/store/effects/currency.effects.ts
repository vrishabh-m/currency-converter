import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";

import { ExchangeRatesUpdatedAction } from "./../actions/exchange-rates";
import { CurrencyConverterDataService } from "../../currency-converter.data.service";
import * as exchanges from "../actions/exchange-rates";

@Injectable()
/**
 * @export
 * @class CurrencyEffects
 * @description Currency update class has implemented NgRx Effects to do API fetching. 
 */
export class CurrencyEffects {

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(exchanges.EXCHANGE_RATES),
    map((action: exchanges.ExchangeRatesFetchAction) => action.payload),
    switchMap((payload) =>
      this.currencyService
        .getLatestCurrencyExchangeRates(payload)
        .pipe(map(data => new ExchangeRatesUpdatedAction(data)))
    )
  );

  constructor(
    private currencyService: CurrencyConverterDataService,
    private actions$: Actions
  ) {}
  
}
