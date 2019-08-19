import { Injectable, LOCALE_ID } from '@angular/core';

import { User } from './user.interface'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uname: string; "";
  users: Array<User>;
  currentUser: User;
  constructor(private router: Router) { 
  }
  logOutUser(loggingOut){
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl('/login')
  }
  confirmUserDetails(uname,pswd){
    this.users = JSON.parse(localStorage.getItem("users"))
    let attemptedLogin = this.users.filter((user) => uname === user.un)
    if(attemptedLogin[0] && attemptedLogin[0].pw === pswd){
      localStorage.setItem('currentUser', JSON.stringify(attemptedLogin[0]))
      return ("acceptedCredentials")
    }
    else{
      return ("failure")
    }
  }
  addNewUser(firstName,lastName,username,password,verifyPassword){
    if(password !== verifyPassword){
      return ("failure")
    }
    else {
      let newUser : User = {fName: firstName,lName: lastName, un: username, pw: password}
      if(localStorage.getItem('users')){
        this.users = JSON.parse(localStorage.getItem('users'))
      }
      else{
        this.users = [];
      }
      let validUser = true
      this.users.forEach(user => {
        if(newUser.un === user.un){
            validUser = false;
        }
      })
      if(validUser){
      this.currentUser = newUser
      this.users.push(newUser)
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
      localStorage.setItem("users", JSON.stringify(this.users))

      return ("validNewUser")
      }
      else{
        return ("failure")
      }
    }
  };
}
    
  
    

