import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {
       
        private headers = new Headers({'Content-Type': 'application/json'});
       private webapiUrl = 'app/transactions';
       
       constructor(private http: Http) { }
       
  getTransactions(): Promise<Transaction[]> {
          
    return this.http.get(this.webapiUrl)
               .toPromise()
               .then(response => response.json().data as Transaction[])
               .catch(this.handleError);
  }
  
  search(term: string): Promise<Transaction[]> {
      
    return this.http
               .get(this.webapiUrl + `?accountId=${term}`)
               .toPromise()
               .then(response => response.json().data as Transaction[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
