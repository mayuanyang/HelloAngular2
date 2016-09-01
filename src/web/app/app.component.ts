import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular2',
  template: `
  <div class="component-app">
    <h1>Accounts</h1>

    <div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Account Id">
        <span class="input-group-btn">
          <button class="btn btn-default" (click)="setAccount()">Set Account</button>
        </span>
      </div>
    </div>
    <div class="row">
      <account ual={{thisUal}}></account>
      <account ual={{thisUal}}></account>
    </div>
  
  </div>
  `
})
export class AppComponent { 
  thisUal : string;
    setAccount(){
      this.thisUal = "46012344433";
    }
}
