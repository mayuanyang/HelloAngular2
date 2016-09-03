import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-angular2',
  template: `
  <div class="container">
  <div class="panel panel-primary">
  <div class="panel-heading">App Component</div>
  <div class="panel-body">
    <div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Account Id" [(ngModel)]="thisUal">
        <span class="input-group-btn">
          <button class="btn btn-default" (click)="search()">Search</button>
        </span>
      </div>
    </div>
    <div class="row">
      <account ual={{thisUal}}></account>
    </div>
    <div class="row">
      <div class="col-md-6">
      aa
      </div>
      <div class="col-md-6">
      bb
      </div>
    </div>
  </div>
  </div>
</div>

  `
})
export class AppComponent { 
  thisUal : string;
    search(){
      this.thisUal = "46012344433";
    }
}
