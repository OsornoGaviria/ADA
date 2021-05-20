import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth} from '@angular/fire/auth';
import { map } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoginGuard implements CanActivate {
  constructor(private Afauth: AngularFireAuth, public router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.Afauth.authState.pipe(map(
        auth=> {
            if(isNullOrUndefined(auth))
            {
              this.router.navigate(['/login']);
              console.log("No logiuin")
              return false
            }else
            {
              console.log("Si logiuin")
              return true
            }
      }
   ))
  }
  
}