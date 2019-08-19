import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'musicProject';
  constructor(private userService: UserService){}
  logOutUser($event){
    this.userService.logOutUser($event)
  }  
}
