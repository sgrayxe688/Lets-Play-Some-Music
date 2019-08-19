import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  userFav: Object[] = [];
  favorites: Object[] = [];

  constructor() { }

  favoriteList(song, album, artist, url) {
    let fullSong = {
      trackName: song,
      collectionName: album,
      artistName: artist,
      previewUrl: url
    }
    let addedFavorite = this.userFav.push(fullSong);
    localStorage.setItem("favorites", JSON.stringify(addedFavorite));
  }
  }

