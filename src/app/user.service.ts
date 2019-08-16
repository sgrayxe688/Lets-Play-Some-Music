import { Injectable } from '@angular/core';

import { User } from './user.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uname: string; "";
  users: Array<User>;
  currentUser: User;
  constructor() { }


  confirmUserDetails(uname,pswd){
    if(uname.length > 0 && pswd.length > 0) {
      this.uname = uname
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
      this.users.forEach(user => {
          if(newUser.un === user.un){
            return ("failure")
          }
        })
        this.currentUser = newUser
        this.users.push(newUser)
        localStorage.setItem("users", JSON.stringify(this.users))
        };
      }
    }
  
    

