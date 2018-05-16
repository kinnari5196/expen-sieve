import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    //private authService: AuthService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}