import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'account',
  template: `
  <div class="component-account">
  <h3>{{ual}} </h3>
  <button class="btn btn-primary" (click)="showTransactions()">Show All Transactions</button>
  <table class="table table-bordered">
  <tr>
    <th>Account Id</th>
    <th>Payment Type</th>
    <th>Amount</th>
  </tr>
    <tr *ngFor="let tx of transactions">
      <td>{{tx.accountId}}</td>
      <td>{{tx.type}}</td>
      <td>{{tx.amount}}</td>
    </tr>
  </table>
  </div>
  `,
  providers: [TransactionService]
})
export class AccountComponent implements OnChanges{ 
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