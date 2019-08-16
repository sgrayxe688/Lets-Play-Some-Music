import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  allPlaylists: Array<Object> = [];

  nameOfPlaylist: string = "";


  constructor(private playlistService: PlaylistService) { 
  }

  createPlaylist() {
    this.playlistService.storePlaylist(this.nameOfPlaylist);
    this.allPlaylists = this.playlistService.allPlaylists;
    console.log(this.allPlaylists);
  }

  ngOnInit() {
    this.allPlaylists = this.playlistService.allPlaylists;
    
  }

}
