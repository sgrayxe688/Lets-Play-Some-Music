import { Injectable } from '@angular/core';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  // newSong: Object[] = [];
  fullPlaylist: Object[] = [];

  allPlaylists: Object[] = [];
  constructor() { }

  playlists(result, name) {
    let fullSong = {
      trackName: result.trackName,
      collectionName: result.collectionName,
      artistName: result.artistName,
      previewUrl: result.previewUrl,
    }
    // this.newSong.push(fullSong);
    let songList = this.allPlaylists.filter((playlistName)=> name === playlistName["name"])
    songList[0]["song"].push(fullSong);
  }

  storePlaylist(playlistName) {
    let fullPlaylist = {
      name: playlistName,
      song: []
    }
    this.allPlaylists.push(fullPlaylist);
  }

  // get currentPlaylist(){
  //   return this.playlist;
  // }

}

  

  