import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlayNowComponent } from './play-now/play-now.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TextPipe } from './text.pipe';
import { AuthGuard } from './auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    FavoritesComponent,
    PlaylistsComponent,
    PlayNowComponent,
    HeaderComponent,
    FooterComponent,

    TextPipe,

    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
