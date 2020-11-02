import { Currency } from './../models/currency';
import * as currency from '../actions/currency';

export function reducer(state = [], action: currency.CurrencyChangeActions) {
    switch (action.type) {
        case currency.EXCHANGE_RATES_SUCCESSFUL:
            return action.payload;
        case currency.CURRENCY_CHANGE_FROM:
            return action.payload;
        case currency.CURRENCY_CHANGE_TO:
            return action.payload;
        default:
            return state;
    }
}
