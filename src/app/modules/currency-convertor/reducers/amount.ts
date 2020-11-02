import { ActionReducer, Action } from '@ngrx/store';

import * as amount from '../actions/amount';


export function reducer(state: number = 1, 
    action: amount.AmountActions) {
    switch (action.type) {
        case amount.AMOUNT_CHANGE_FROM:
            return action.payload;
        case amount.AMOUNT_CHANGE_TO:
            return action.payload;
        // default:
        //     return state;
    }
}
