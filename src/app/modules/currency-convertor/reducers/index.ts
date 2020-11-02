import { Currency } from './../models/currency';

import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export interface State {
    amount: number;
    // amountTo: number;
    // amountFrom: number;
    currencies: Currency[];
}

export const reducers = {
    amount: fromAmount.reducer,
    amountTo: fromAmount.reducer,
    currencies: fromCurrency.reducer
};

// Selectors
export const getAmountToState = (state: State) => state.amount;
export const getExchangeRatesList = (state: State) => state.currencies;


// export const getAmountFromState = (state: State) => state.amount;
// export const getSelectedCurrency_To = (state: State) => state.currencies;
// export const getSelectedCurrency_From = (state: State) => state.currencies;
