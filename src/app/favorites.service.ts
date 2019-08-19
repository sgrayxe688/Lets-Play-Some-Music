import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  userFav: Object[] = [];

  constructor() { }

  favoriteList(song, album, artist, url) {
    let fullSong = {
      trackName: song,
      collectionName: album,
      artistName: artist,
      previewUrl: url
    }
    this.userFav.push(fullSong);

localStorage.setItem("fullSong", JSON.stringify (this.favoriteList));
console.log(localStorage)
  }
  }
