import * as amount from '../actions/amount';

export interface ActionState {
    amountFrom: number;
    amountTo: number;
}

const initialState: ActionState = {
    amountFrom: 1,
    amountTo: 1.3273
}

/**
 *
 *
 * @export
 * @param {ActionState} [state=initialState]
 * @param {amount.AmountActions} action
 * @return {*} 
 * @description This reducer handles the actions on amount update.
 */
export function amountReducer(state: ActionState = initialState, action: amount.AmountActions) {
    switch (action.type) {
        case amount.AMOUNT_CHANGE_FROM:
            return {
                ...state, 
                amountTo: parseFloat((action.payload.amount * action.payload.currencyDiff.value).toFixed(4))
            };
        case amount.AMOUNT_CHANGE_TO:
            return {
                ...state, 
                amountFrom: parseFloat((action.payload.amount * action.payload.currencyDiff.value).toFixed(4))
            };
        default:
            return state;
    }
}
