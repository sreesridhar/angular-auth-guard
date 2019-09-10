import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  canLogin = true;

  constructor(private router: Router) {}

  canActivate() {
    if (this.canLogin) {
      return true;
    }

    this.router.navigate(['./login']);
    return false;
  }
}
