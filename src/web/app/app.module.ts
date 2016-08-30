import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AccountComponent } from './account.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
