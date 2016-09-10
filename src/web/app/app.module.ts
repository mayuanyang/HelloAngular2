import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { TransactionComponent } from './transaction.component';
import { ObservableSimpleComponent } from './observable-simple.component';
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
  declarations: [ AppComponent, TransactionComponent, ObservableSimpleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
