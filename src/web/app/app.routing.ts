import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent }      from './transaction.component';
import { TransactionDetailComponent }      from './transaction-detail.component';

const appRoutes: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent
  },
  {
    path: 'details',
    component: TransactionDetailComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);