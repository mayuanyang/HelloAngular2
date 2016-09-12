import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular2-60mins',
  template: `
  <div class="navbar navbar-inverse" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="" class="navbar-brand">
                Learn Angular 2 In 60 Minutes
            </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="/transactions">Transactions</a></li>
            <li><a routerLink="/observable">Observable</a></li>
            <li><a routerLink="/videos">Videos</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <p class="navbar-text"></p>
            </li>
          </ul>  
        </div>
    </div>
  <div class="container">
    <div class="panel panel-primary">
    <div class="panel-heading">App Component</div>
    <div class="panel-body">
      <router-outlet></router-outlet>      
    </div>
    </div>
</div>

  `
})
export class AppComponent { 
  
}
