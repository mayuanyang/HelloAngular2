import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionDataService } from './transaction-data.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {
       
     
       constructor(private txDataService: TransactionDataService) { }
       
  getTransactions(): Transaction[] {
          
    return this.txDataService.createDb();
  }
  
  
}
