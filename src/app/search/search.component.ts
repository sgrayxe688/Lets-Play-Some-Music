import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FavoritesService } from '../favorites.service';
import { PlayistService } from '../playist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  results: Array<any>;

  constructor(private searchService: SearchService, private favoritesService: FavoritesService, private playistService: PlayistService) { }
    
    search() {
      this.searchService.getInfo(this.searchText).subscribe(res => {this.results = res
      this.searchService.saveResults(res)
      });
      console.log(this.results);
    }

    favorites(result) {
      this.favoritesService.favorites(result.trackName, result.collectionName, result.artistName, result.previewUrl);
    }

    playlist(result) {
      this.playistService.playlists(result.trackName, result.collectionName, result.artistName, result.previewUrl);
    }

    

  ngOnInit() {
    this.results = this.searchService.returnSave()
    
  }

}