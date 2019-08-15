import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  // albumName: string = this.getElementById("albumName")
  // artistName: string = event.getElementById("#artistyName").value;
  results: any;

  constructor(private searchService: SearchService) { }
    
    search() {
      this.searchService.getInfo(this.searchText).subscribe(res => {this.results = res
  
      });
      console.log(this.results);
    }

    favorites(result) {
      let songName: string = result.trackName; 
      let albumName: string = result.collectionName;
      let artistName: string = result.artistName;
      let previewUrl: string = result.previewUrl;
      console.log(songName, albumName, artistName, previewUrl);
    }

  

  ngOnInit() {
    
  }

}