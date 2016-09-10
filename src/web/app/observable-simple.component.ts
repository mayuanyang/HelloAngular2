import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'observable-simple',
  template: `
  <div class="col-md-12">
  <div class="panel panel-info">
  <div class="panel-heading">Simple Observable</div>
  <div class="panel-body">
    
  <h3>{{result}} </h3>
  <button class="btn btn-primary" (click)="doWorkWithPromise()">Do Work With Promise</button>
  <button class="btn btn-primary" (click)="doWorkWithObservable()">Do Work With Observable</button>
  
  </div>
</div>
</div>
    
  `,
  providers: []
})
export class ObservableSimpleComponent{ 
       
       result : string;
    doWorkWithPromise(){
        let promise = new Promise(resolve =>{
            return resolve('i am a promise');
        });
        
        promise.then(value => this.result = <string>value);
    }
    
    doWorkWithObservable(){
        let stream$ = new Observable(observer =>{
            return observer.next('i am an observable');
        });
        
        stream$.subscribe(value => this.result = <string>value);
    }
}