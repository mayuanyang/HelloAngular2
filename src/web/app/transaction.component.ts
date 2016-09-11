import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { TransactionDataService } from './transaction-data.service';

@Component({
  selector: 'transactions',
  template: `
  <div class="col-md-12">
  <div class="panel panel-info">
  <div class="panel-heading">Account Component</div>
  <div class="panel-body">
  
    <button class="btn btn-primary" (click)="showTransactions()">Show All Transactions</button>
    <table class="table table-bordered">
      <tr>
        <th>Account Id</th>
        <th>Payment Type</th>
        <th>Amount</th>
        <th></th>
      </tr>
      <tr *ngFor="let tx of transactions">
        <td>{{tx.accountId}}</td>
        <td>{{tx.type}}</td>
        <td>{{tx.amount | currency : 'AUD' | lowercase }}</td>
        <td>Details</td>
      </tr>
    </table>
  </div>
</div>
</div>
    
  `,
  providers: [TransactionService, TransactionDataService]
})
export class TransactionComponent { 
    @Input() ual : string;
    transactions : Transaction[];
    
    constructor(private txService : TransactionService){
     
    }
    
    showTransactions(){
    
          this.transactions = this.txService.getTransactions();
       
    }
    
    
}