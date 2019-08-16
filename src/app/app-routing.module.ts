import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard'
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'playlists', component: PlaylistsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', component: SearchComponent},
  {path: '**', redirectTo: '/'}
  {path: 'sign-up', component: SignUpComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
