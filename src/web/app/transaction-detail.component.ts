import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from './transaction';


@Component({
  selector: 'transaction-details',
  template: `
  <div class="col-md-12">
  <h2>Transaction Details</h2>
  <label>Account Id</label>
  {{selectedTransaction.accountId}}
</div>
    
  `
})
export class TransactionDetailComponent { 
    @Input() selectedTransaction : Transaction;
          
    
}