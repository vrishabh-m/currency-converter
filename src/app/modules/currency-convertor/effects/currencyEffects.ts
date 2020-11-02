import { CurrenciesUpdatedAction } from "./../actions/currency";
import { CurrencyConverterDataService } from "../currency-converter.data.service";
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as currency from "../actions/currency";
import { switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class CurrencyEffects {

  constructor(
    private currencyService: CurrencyConverterDataService,
    private actions$: Actions
  ) {}

  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(currency.EXCHANGE_RATES),
    switchMap(() =>
      this.currencyService
        .getLatestCurrencyExchangeRates()
        .pipe(map(data => new CurrenciesUpdatedAction(data)))
    )
  );
  
}
