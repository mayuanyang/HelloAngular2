import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable()
export class TransactionService {
       
  getTransactions(): Promise<Transaction[]> {
      console.log('getting tranactions');
      var tx1 : Transaction = {id: '1', type: 'BPay', amount: 10, accountId : '46012345678'};
      var tx2 : Transaction = {id: '2', type: 'BPay', amount: 20, accountId : '46012345678'};
      
    return Promise.resolve([tx1, tx2]);
  }
}
