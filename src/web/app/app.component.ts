import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular2',
  template: `<h1>Accounts</h1>
  <account ual={{thisUal}}></account>
  <button (click)="setAccount()">Set Account</button>
  `
})
export class AppComponent { 
  thisUal : string;
    setAccount(){
      this.thisUal = "46012344433";
    }
}
