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
  <div>
    <button class="btn btn-primary" (click)="doWorkWithPromise()">Do Work With Promise</button>
    <button class="btn btn-primary" (click)="doWorkWithObservable()">Do Work With Observable</button>
    <button class="btn btn-primary" (click)="observableWithFilter()">Observable With Filter</button>
  </div>
  <div class="col-md-5 well" style="margin:10 10 0 0;">
    <p>Observable</p>
    <p *ngFor="let num of numbers">{{num}}</p>
  </div>
  
  <div class="col-md-5 well"  style="margin:10 10 0 0;">
    <p>Filtered Observable</p>
    <p *ngFor="let num of filteredNumbers">{{num}}</p>
  </div>
  </div>
</div>
</div>
    
  `,
  providers: []
})
export class ObservableSimpleComponent{ 
       numbers : number[] = [];
       filteredNumbers: number[] = [];
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
    
    observableWithFilter(){
        
        let numbers$ = new Observable(observer =>{
            let count = 0;
            let interval = setInterval(() => {
                if(count <= 19){
                    count+=1;
                    observer.next(count);
                    this.numbers.push(count);
                }
            }, 500)
        });
        
        let filteredNumber$ = numbers$.filter(value => (<number>value) % 2 === 0);
        
        filteredNumber$.subscribe(value => this.filteredNumbers.push(<number>value) );
    
    }
}