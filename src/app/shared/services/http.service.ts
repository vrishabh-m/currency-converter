import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class HttpService {

  constructor(private http: HttpClient) { }

  public GET(url: string, response: any = 'json'): Observable<any> {
    return this.http.get<any>(url, {responseType: response});
  } 


}
