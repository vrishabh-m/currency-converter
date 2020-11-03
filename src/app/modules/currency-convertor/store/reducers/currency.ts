import * as currency from '../actions/currency';
import { ExchangeRate } from '../../models/currency';

export interface CurrencyState {
    currencyFrom: ExchangeRate;
    currencyTo: ExchangeRate;
}

const initialState: CurrencyState = {
    currencyFrom: {
        code: 'USD',
        value: 1
    },
    currencyTo: {
        code: 'CAD',
        value: 1.327325781
    }
}

/**
 *
 *
 * @export
 * @param {CurrencyState} [state=initialState]
 * @param {currency.CurrencyChangeActions} action
 * @return {*} 
 * @description This reducer is responsible to handle the actions on currency change
 */
export function currencyReducer(state: CurrencyState = initialState, 
    action: currency.CurrencyChangeActions) {

    switch (action.type) {
        case currency.CURRENCY_CHANGE_FROM:
            return {
                ...state, currencyFrom: action.payload
            };
        case currency.CURRENCY_CHANGE_TO:
            return {
                ...state, currencyTo: action.payload
            };
        default:
            return state;
    }
}
