import { Component, OnInit } from '@angular/core';
import { PlayistService } from '../playist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlist: Array<Object> = [];
  constructor(private playistService: PlayistService) { 

  }

  // createPlaylist() {
  //   this.playistService.playlists(this.song, this.album, this.artist, this.url)
  // }


  ngOnInit() {
    this.playlist = this.playistService.playlist;
  }

}
