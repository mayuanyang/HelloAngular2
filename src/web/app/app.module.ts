import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { TransactionComponent } from './transaction.component';
import { YoutubeComponent } from './youtube.component';
import { ObservableSimpleComponent } from './observable-simple.component';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { TransactionDataService }  from './transaction-data.service';
import { routing }  from './app.routing';


@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    routing
    ],
  declarations: [ AppComponent, TransactionComponent, ObservableSimpleComponent, YoutubeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
