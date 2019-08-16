import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  signUpUser(event){
    event.preventDefault()
    const firstName = event.target.querySelector('#firstName').value
    const lastName = event.target.querySelector('#lastName').value
    const username = event.target.querySelector('#username').value
    const password = event.target.querySelector('#password').value
    const verifyPassword = event.target.querySelector('#verifyPassword').value
    let signedUp = this.userService.addNewUser(firstName, lastName, username, password, verifyPassword)
    if(signedUp === "failure"){
      alert ("NONONONONO lets get this right")
    }
    else {
      const isLoggedIn = true
      console.log(this.userService.uname)
    }
  }

}