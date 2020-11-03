import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * @export
 * @class HttpService
 * @description This service is responsible to perform HTTP calls.
 */
export default class HttpService {

  constructor(private http: HttpClient) { }

  /**
   *
   * @param {string} url
   * @param {*} [response='json']
   * @return {*}  {Observable<any>}
   * @memberof HttpService
   * @description HTTP Get Call
   */
  public GET(url: string, response: any = 'json'): Observable<any> {
    return this.http.get<any>(url, {responseType: response});
  } 


}
