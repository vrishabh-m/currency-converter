import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BASE_CURRENCY } from 'src/app/constant/app-constant';

import HttpService from "../../shared/services/http.service";
import UrlService from "../../shared/services/url.service";
import { ExchangeRate } from './models/currency';

@Injectable()
export class CurrencyConverterDataService {

    constructor(private httpService: HttpService) {}

    
    public getLatestCurrencyExchangeRates(base: string = BASE_CURRENCY): Observable<ExchangeRate[]> {
        return this.httpService.GET(UrlService.getExchangeRatesUrl(base))
                    .pipe(
                        map(result => {
                            return Object.keys(result.rates).map((key): ExchangeRate => {
                                return { code: key, value: result.rates[key] };
                            });
                        })
                    );
    }

}