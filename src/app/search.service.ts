import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  resultSearch: Array<any> = []
  constructor(private http: HttpClient, private userService: UserService) { }
    
  getInfo(searchText: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${searchText}`)
    .pipe(
      map(res => res["data"])
    )
  }

  saveResults(searchRes){
    this.resultSearch = searchRes
  }

  returnSave(){
    return this.resultSearch
  }

}








