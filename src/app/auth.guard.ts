import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService){

  }
  canActivate(next:ActivatedRouteSnapshot): boolean{
    if(this.userService.uname){
      return true
    } 
    else{
      return false
    }

  }
}
