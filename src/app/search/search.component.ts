import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  results: any;

  constructor(private searchService: SearchService) { }
    
    search() {
      this.searchService.getInfo(this.searchText).subscribe(res => this.results = res);
      console.log(this.results);
    }

  

  ngOnInit() {
    
  }

}