import { Injectable } from '@angular/core';

import { EXCHANGE_RATES_URL, BASE_CURRENCY } from '../../constant/app-constant';

@Injectable({
  providedIn: 'root'
})
export default class UrlService {

  public static getExchangeRatesUrl(base: string = BASE_CURRENCY): string {
    return EXCHANGE_RATES_URL.concat('?base=',base);
  }

}
