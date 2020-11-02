import { Currency } from './../models/currency';
import { Action } from '@ngrx/store';

export const EXCHANGE_RATES = '[Exchange Rates] Fetch Rates';
export const EXCHANGE_RATES_SUCCESSFUL = '[Exchange Rates] SUCCESSFUL';

export class CurrenciesFetchAction implements Action {
    type = EXCHANGE_RATES;
}

export class CurrenciesUpdatedAction implements Action {
    type = EXCHANGE_RATES_SUCCESSFUL;

    constructor(public payload: Currency[]) {}
}

// ...........

export const CURRENCY_CHANGE_FROM: string = '[Currency] Change From';
export const CURRENCY_CHANGE_TO: string = '[Currency] Change To';

export class CurrencyChangeFromAction implements Action {
    type = CURRENCY_CHANGE_FROM;

    constructor(public payload: number) {}
}

export class CurrencyChangeToAction implements Action {
    type = CURRENCY_CHANGE_TO;

    constructor(public payload: number) {}
}

export type CurrencyChangeActions = CurrencyChangeFromAction | CurrencyChangeToAction | CurrenciesUpdatedAction;