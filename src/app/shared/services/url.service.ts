import { Injectable } from '@angular/core';

import { EXCHANGE_RATES_URL, BASE_CURRENCY } from '../../constant/app-constant';

@Injectable({
  providedIn: 'root'
})
/**
 *
 * @export
 * @class UrlService
 * @description This responsibility of this service is to provide URLs
 */
export default class UrlService {

  /**
   *
   * @static
   * @param {string} [base=BASE_CURRENCY]
   * @return {*}  {string}
   * @memberof UrlService
   * @description Get Latest Exchange Rates API URL
   */
  public static getExchangeRatesUrl(base: string = BASE_CURRENCY): string {
    return EXCHANGE_RATES_URL.concat('?base=',base);
  }

}
