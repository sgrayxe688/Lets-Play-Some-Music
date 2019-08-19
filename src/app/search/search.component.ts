import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { FavoritesService } from '../favorites.service';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchText: string = "";
  results: Array<any>;
  newPlaylist: string = "";

  constructor(private searchService: SearchService, private favoritesService: FavoritesService, private playlistService: PlaylistService) { }
    
    playlistList = this.playlistService.allPlaylists;

    search() {
      this.searchService.getInfo(this.searchText).subscribe(res => {this.results = res
      this.searchService.saveResults(res)
      });
      console.log(this.results);
    }

    userFav(result) {
      this.favoritesService.favoriteList(result.title, result.album.title, result.artist.name, result.preview);
    }


    playlist(result, playlist) {
      this.playlistService.playlists(result, playlist);
    }

    

  ngOnInit() {
    this.results = this.searchService.returnSave()
    
  }

}

