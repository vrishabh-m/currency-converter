import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//3rd party modules
import { AgGridModule } from 'ag-grid-angular';
import { NglModule } from 'ng-lightning';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CurrencyConvertorRoutingModule } from './currency-convertor-routing.module';

//Components
import { CurrencyConverterComponent } from './currency-converter.component';
import { ConversionHistoryComponent } from './conversion-history/conversion-history.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

//Services
import { CurrencyConverterDataService } from './currency-converter.data.service';

import { reducers } from './reducers/index';
import { CurrencyEffects } from './effects/currencyEffects';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
    ConversionHistoryComponent,
    CurrencySelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NglModule,
    AgGridModule.withComponents([]),
    CurrencyConvertorRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])
  ],
  providers: [
    CurrencyConverterDataService
  ]
})
export class CurrencyConvertorModule { }
