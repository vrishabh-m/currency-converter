/**
 * @export
 * @interface ExchangeRates
 * @description Exchange Rates Model is created to map the API response.
 */
export interface ExchangeRates {
    base: string;
    date: string;
    rates: object;
}
