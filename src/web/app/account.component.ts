import { Component, Input } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'account',
  template: `
  <div class="component-account">
  <h3>{{ual}} </h3>
  <button class="btn btn-primary" (click)="showTransactions()">Show Transactions</button>
  <table class="table table-bordered">
    <tr *ngFor="let tx of transactions">
      <td>{{tx.id}}</td>
      <td>{{tx.type}}</td>
      <td>{{tx.amount}}</td>
    </tr>
  </table>
  </div>
  `,
  providers: [TransactionService]
})
export class AccountComponent { 
    @Input()
    ual : string;
    transactions : Transaction[];
    
    constructor(private txService : TransactionService){
     
    }
    
    showTransactions(){
       console.log('hello ' + this.ual);
        this.txService.getTransactions()
        .then(data =>{
          this.transactions = data;
        });
    }
}