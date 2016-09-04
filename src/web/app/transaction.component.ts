import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'transactions',
  template: `
  <div class="col-md-12">
  <div class="panel panel-info">
  <div class="panel-heading">Account Component</div>
  <div class="panel-body">
    
  <h3>{{ual}} </h3>
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
      <td>{{tx.amount}}</td>
      <td>Details</td>
    </tr>
  </table>
  </div>
</div>
</div>
    
  `,
  providers: [TransactionService]
})
export class TransactionComponent implements OnChanges{ 
    @Input() ual : string;
    transactions : Transaction[];
    
    constructor(private txService : TransactionService){
     
    }
    
    ngOnChanges(changes: SimpleChanges) {
        this.searchTransactions(changes['ual'].currentValue);
  }
    
    showTransactions(){
       console.log('hello ' + this.ual);
        this.txService.getTransactions()
        .then(data =>{
          this.transactions = data;
        });
    }
    
    searchTransactions(phrase : string){
      //console.log(`searching for ${phrase}`);
      this.txService.search(phrase)
        .then(data =>{
          this.transactions = data;
        });
    }
}