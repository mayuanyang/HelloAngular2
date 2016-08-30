import { Component, Input } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'account',
  template: `<h1>Account {{ual}} <button (click)="showTransactions()">Show Transactions</button></h1>
  <table>
    <tr *ngFor="let tx of transactions">
      <td>{{tx.id}}</td>
      <td>{{tx.type}}</td>
      <td>{{tx.amount}}</td>
    </tr>
  </table>
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