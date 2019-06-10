import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate() {
    return this.checkIfLoggedIn();
  }
  constructor(private router:Router){}

  private checkIfLoggedIn(): boolean {

    let loggedIn: boolean;

    loggedIn = sessionStorage.getItem('loggedIn') ? true:false;

    if(!loggedIn){this.router.navigateByUrl('/login');}
    return loggedIn;
  }
}
