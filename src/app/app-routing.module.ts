import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { ROUTE_PATH_CURRENCY_CONVERTER, ROUTE_PATH_DISCLAIMER } from './constant/app-constant';

const routes: Routes = [
  {
    path: ROUTE_PATH_CURRENCY_CONVERTER,
    loadChildren: () => import('./modules/currency-convertor/currency-convertor.module')
                          .then(m => m.CurrencyConvertorModule)
  },
  {
    path: ROUTE_PATH_DISCLAIMER,
    loadChildren: () => import('./modules/disclaimer/disclaimer.module')
                          .then(m => m.DisclaimerModule)
  },
  {
    path: '',
    redirectTo: ROUTE_PATH_CURRENCY_CONVERTER,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ROUTE_PATH_CURRENCY_CONVERTER,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
