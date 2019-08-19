import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  resultSearch: Array<any> = []
  constructor(private http: HttpClient) { }
    
  getInfo(searchText: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${searchText}&entity=song`)
    .pipe(
      map(res => res["results"])
    )
  }

  saveResults(searchRes){
    this.resultSearch = searchRes
  }

  returnSave(){
    return this.resultSearch
  }

}








