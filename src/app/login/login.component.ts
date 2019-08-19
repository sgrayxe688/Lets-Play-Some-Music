import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  
  constructor(private userService: UserService, private authGuard: AuthGuard, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const username = event.target.querySelector('#username').value
    const password = event.target.querySelector('#password').value
    let result = this.userService.confirmUserDetails(username, password)
    if (result === "acceptedCredentials"){
      this.router.navigateByUrl('/search')
    }
    else if(result === "failure"){
      alert ("NONONONONO lets get this right")
    }
    
  }

}
