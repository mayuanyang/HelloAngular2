import { Injectable } from '@angular/core';
import { YoutubeItem } from './youtube-item';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class YoutubeService {
       
  private webapiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private api_key = 'AIzaSyDrPpZkJ6tBkdCemWS3jXu6zKTipcZA7SQ';
           
     
  constructor(private http: Http) {}
  
  search(term: string): Observable<any[]> {
    
    let url = `${this.webapiUrl}?q=${term}&part=snippet&maxResults=25&key=${this.api_key}`;
    console.log(url);
    let results$ = this.http
               .get(url)
               .map(res => res.json())
               .map(res => res.items);
  (results$.toPromise().then(x => {
    console.log(x);
  }));
               return results$;
  }
  
}
