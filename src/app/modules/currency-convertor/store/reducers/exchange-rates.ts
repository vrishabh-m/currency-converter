import * as exchanges from '../actions/exchange-rates';

import { ExchangeRate } from '../../models/currency';

export interface ExchangeRateState {
    exchangeRates: ExchangeRate[];
}

const initialState: ExchangeRateState = {
    exchangeRates: []
}

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
