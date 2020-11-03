import { Action } from '@ngrx/store';
import { BASE_CURRENCY } from 'src/app/constant/app-constant';
import { ExchangeRate } from '../../models/currency';

export const EXCHANGE_RATES = '[Exchange Rates] Fetch Rates';
export const EXCHANGE_RATES_SUCCESSFUL = '[Exchange Rates] SUCCESSFUL';

export class ExchangeRatesFetchAction implements Action {
    readonly type = EXCHANGE_RATES;

    constructor(public payload: string = BASE_CURRENCY) {}
}

export class ExchangeRatesUpdatedAction implements Action {
    readonly type = EXCHANGE_RATES_SUCCESSFUL;

    constructor(public payload: ExchangeRate[]) {}
}
