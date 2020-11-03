import * as exchanges from '../actions/exchange-rates';

import { ExchangeRate } from '../../models/currency';

export interface ExchangeRateState {
    exchangeRates: ExchangeRate[];
}

const initialState: ExchangeRateState = {
    exchangeRates: []
}

/**
 *
 *
 * @export
 * @param {ExchangeRateState} [state=initialState]
 * @param {exchanges.ExchangeRatesUpdatedAction} action
 * @return {*} 
 * @description This reducer is responsible to handle exchange rate API actions.
 */
export function exchangeRateReducer(state: ExchangeRateState = initialState, 
    action: exchanges.ExchangeRatesUpdatedAction) {
    switch (action.type) {
        case exchanges.EXCHANGE_RATES_SUCCESSFUL:
            return {
                ...state, exchangeRates: action.payload
            };
        default:
            return state;
    }
}
