import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayistService {
  playlist: Object[] = [];

  constructor() { }

  playlists(song, album, artist, url) {
    let fullSong = {
      trackName: song,
      collectionName: album,
      artistName: artist,
      previewUrl: url
    }
    this.playlist.push(fullSong);
    localStorage.setItem("playlist", JSON.stringify (fullSong));
    console.log(localStorage)
  }

 
}
