import { ActionReducerMap } from '@ngrx/store';

import * as fromExchangeRates from './reducers/exchange-rates';
import * as fromAmount from './reducers/amount';
import * as fromCurrency from './reducers/currency';

export interface AppState {
    amount: fromAmount.ActionState;
    currency: fromCurrency.CurrencyState;
    exchanges: fromExchangeRates.ExchangeRateState;
}

export const appReducer: ActionReducerMap<AppState> = {
    amount: fromAmount.amountReducer,
    currency: fromCurrency.currencyReducer,
    exchanges: fromExchangeRates.exchangeRateReducer
};


export const getExchangeRatesList = (state: AppState) => state.exchanges.exchangeRates;

export const getAmountToState = (state: AppState) => state.amount.amountTo;
export const getAmountFromState = (state: AppState) => state.amount.amountFrom;

export const getSelectedCurrency_To = (state: AppState) => state.currency.currencyTo;
export const getSelectedCurrency_From = (state: AppState) => state.currency.currencyFrom;
