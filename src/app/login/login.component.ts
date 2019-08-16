import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  
  constructor(private userService: UserService, private authGuard: AuthGuard) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const username = event.target.querySelector('#username').value
    const password = event.target.querySelector('#password').value
    // this.user.confirmUserDetails(username, password)
    let result = this.userService.confirmUserDetails(username, password)
    if(result === "failure"){
      alert ("NONONONONO lets get this right")
    }
    else {
      const isLoggedIn = true
      console.log(this.userService.uname)
    }
  }

}
