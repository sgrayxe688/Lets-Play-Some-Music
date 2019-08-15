import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', component: SearchComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
