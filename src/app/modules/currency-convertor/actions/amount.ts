import { Action } from '@ngrx/store';

export const AMOUNT_CHANGE_FROM: string = '[Amount] Change From';
export const AMOUNT_CHANGE_TO: string = '[Amount] Change To';

export class AmountChangeFromAction implements Action {
    type = AMOUNT_CHANGE_FROM;

    constructor(public payload: number) {}
}

export class AmountChangeToAction implements Action {
    type = AMOUNT_CHANGE_TO;

    constructor(public payload: number) {}
}

export type AmountActions = AmountChangeFromAction | AmountChangeToAction;