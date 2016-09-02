import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { AccountComponent } from './account.component';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { TransactionDataService }  from './transaction-data.service';


@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(TransactionDataService),
    ],
  declarations: [ AppComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
