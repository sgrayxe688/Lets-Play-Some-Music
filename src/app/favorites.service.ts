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
    let addedFavorite = this.userFav.push(fullSong);
    localStorage.setitem("favorites", JSON.stringify(addedFavorite))
  }
  }

