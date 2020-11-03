import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import HttpService from "../../shared/services/http.service";
import UrlService from "../../shared/services/url.service";
import { ExchangeRate } from './models/currency';

@Injectable()
export class CurrencyConverterDataService {

    constructor(private httpService: HttpService) {}

    
    public getLatestCurrencyExchangeRates(): Observable<ExchangeRate[]> {
        return this.httpService.GET(UrlService.getExchangeRatesUrl())
                    .pipe(
                        map(result => {
                            return Object.keys(result.rates).map((key): ExchangeRate => {
                                return { code: key, value: result.rates[key] };
                            });
                        })
                    );
    }

}