import { Action } from '@ngrx/store';

import { ExchangeRate } from '../../models/currency';

export const CURRENCY_CHANGE_FROM: string = '[Currency] Change From';
export const CURRENCY_CHANGE_TO: string = '[Currency] Change To';

export class CurrencyChangeFromAction implements Action {
    readonly type = CURRENCY_CHANGE_FROM;

    constructor(public payload: ExchangeRate) {}
}

export class CurrencyChangeToAction implements Action {
    readonly type = CURRENCY_CHANGE_TO;

    constructor(public payload: ExchangeRate) {}
}

export type CurrencyChangeActions = CurrencyChangeFromAction | CurrencyChangeToAction;