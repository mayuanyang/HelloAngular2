import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular2',
  template: `
  <div class="component-app">
  <h1>Accounts</h1>
  <account ual={{thisUal}}></account>
  <button class="btn btn-primary" (click)="setAccount()">Set Account</button>
  </div>
  `
})
export class AppComponent { 
  thisUal : string;
    setAccount(){
      this.thisUal = "46012344433";
    }
}
