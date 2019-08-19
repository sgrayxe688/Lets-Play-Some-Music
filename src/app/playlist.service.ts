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
      trackName: result.title,
      collectionName: result.album.title,
      artistName: result.artist.name,
      previewUrl: result.preview,
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

  

  