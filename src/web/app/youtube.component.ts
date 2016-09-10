import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'youtube',
  template: `
  <div class="col-md-12">
    <div class="panel panel-info">
        <div class="panel-heading">Youtube Component</div>
        <div class="panel-body">
            
            <h3>Youtube Search </h3>
            
                <input #searchBox id="search-box" (keyup)="search(searchBox.value)" class="form-control" />
            <div *ngFor="let result of results$ | async" class="row" style="margin-bottom:10px; margin-top: 10px;">
        <div class="col-md-6">        
            <img [src]="result.snippet.thumbnails.high.url" class="img-rounded" alt="Cinque Terre" />
        </div>
        <div class="col-md-6"> 
            <a href="https://www.youtube.com/watch?v={{result.id.videoId}}" target="_blank">
                <h3>{{result.snippet.title}}</h3>
            </a>
            <p>{{result.snippet.description}}
        </div>        
    </div>
    
        </div>
    </div>
  </div>
  
    
  
  `,
  providers: [YoutubeService]
})
export class YoutubeComponent implements OnInit { 
    private keyphrase : string;
    private searchTerms = new Subject<string>();
    private results$ : Observable<any[]>;
    constructor(private youtubeService : YoutubeService){}
       
    ngOnInit(): void {
    this.results$ = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.youtubeService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

    // Push a search term into the observable stream.
  search(term: string): void {
      console.log(term);
    this.searchTerms.next(term);
  }
  

}