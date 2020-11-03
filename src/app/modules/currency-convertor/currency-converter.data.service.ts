/**
 * @author: Vrishabh Mishra
 */
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { BASE_CURRENCY } from 'src/app/constant/app-constant';

import HttpService from "../../shared/services/http.service";
import UrlService from "../../shared/services/url.service";
import LoggerService from "../../shared/services/logger.service";
import { ExchangeRate } from './models/currency';

@Injectable()
/**
 * @export
 * @class CurrencyConverterDataService
 * @description Currency Converter is a data service responsible to get the data and process it.
 */
export class CurrencyConverterDataService {

    constructor(private httpService: HttpService, 
                private loggerService: LoggerService) {}

    /**
     *
     * @param {string} [base=BASE_CURRENCY]
     * @return {*}  {Observable<ExchangeRate[]>}
     * @memberof CurrencyConverterDataService
     * @description Get the Latest Currency Exchange Rates
     */
    public getLatestCurrencyExchangeRates(base: string = BASE_CURRENCY): Observable<ExchangeRate[]> {
        return this.httpService.GET(UrlService.getExchangeRatesUrl(base))
                    .pipe(
                        map(result => {
                            return Object.keys(result.rates).map((key): ExchangeRate => {
                                return { code: key, value: result.rates[key] };
                            });
                        }),
                        catchError(this.handleError.bind(this))
                    );
    }

    /**
     *
     * @private
     * @param {*} err
     * @memberof CurrencyConverterDataService
     * @description This method is used to handle errors
     */
    private handleError(err: any): void {
        this.loggerService.error(err);
    }

}