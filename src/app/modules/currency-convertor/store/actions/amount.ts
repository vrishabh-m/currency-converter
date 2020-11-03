import { Action } from '@ngrx/store';
import { ExchangeRate } from '../../models/currency';

export const AMOUNT_CHANGE_FROM: string = '[Amount] Change From';
export const AMOUNT_CHANGE_TO: string = '[Amount] Change To';

export interface AmountUpdateInterface {
    amount: number;
    currencyDiff: ExchangeRate
}

export class AmountChangeFromAction implements Action {
    readonly type = AMOUNT_CHANGE_FROM;

    constructor(public payload: AmountUpdateInterface) {}
}

export class AmountChangeToAction implements Action {
    readonly type = AMOUNT_CHANGE_TO;

    constructor(public payload: AmountUpdateInterface) {}
}

export type AmountActions = AmountChangeFromAction | AmountChangeToAction;