import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * 
 * @export
 * @class LoggerService
 * @description This service is reponsible to log the data in the console.
 */
export default class LoggerService {

  constructor() { }

  /**
   *
   * @param {string} message
   * @memberof LoggerService
   * @description Logs messages to console
   */
  public log(message: string): void {
    console.log(message);
  }

  /**
   *
   * @param {string} message
   * @memberof LoggerService
   * @description Logs error messages to console
   */
  public error(message: string): void {
    console.log(message);
  }

}
