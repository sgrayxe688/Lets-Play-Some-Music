import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  userFav: Array<Object> = [];


  constructor(private favoritesService: FavoritesService) { 
  }


  ngOnInit() {
    this.userFav = this.favoritesService.userFav;
    localStorage.setItem("currentFavorites", JSON.stringify(this.userFav));
  }

}