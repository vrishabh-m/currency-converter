import { Component, OnInit } from '@angular/core';

import { ConversionHistoryColumnDefinitionService } from './conversion-history.columnDef.service';

@Component({
  selector: 'app-conversion-history',
  templateUrl: './conversion-history.component.html',
  styleUrls: ['./conversion-history.component.scss'],
  providers: [ConversionHistoryColumnDefinitionService]
})
/**
 *
 * @export
 * @class ConversionHistoryComponent
 * @description This class is responsible to show the history of all the trasactions performed on currency component
 */
export class ConversionHistoryComponent implements OnInit {

  public columnDefs: any;

  constructor(public conversionHistoryColumnDefService: ConversionHistoryColumnDefinitionService) { }

  ngOnInit(): void {
    this.columnDefs = this.conversionHistoryColumnDefService.getColumnDefinition();
  }

  rowData = [
    { from: 'CAD: 1.0', to: 'USD: 0.6', date: '12/2/19', time: '1:15:12 am' },
    { from: 'CAD: 3', to: 'EUR: 4', date: '12/2/19', time: '1:15:13 am' }
  ];

}
