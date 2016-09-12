import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent }      from './transaction.component';
import { TransactionDetailComponent }      from './transaction-detail.component';
import { YoutubeComponent }      from './youtube.component';
import { ObservableSimpleComponent }      from './observable-simple.component';

const appRoutes: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent
  },
  {
    path: 'details',
    component: TransactionDetailComponent
  },
  {
    path: 'videos',
    component: YoutubeComponent
  },
  {
    path: 'observable',
    component: ObservableSimpleComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);