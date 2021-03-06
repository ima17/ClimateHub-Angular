import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from './token.service';

@Injectable()
export class AfterLoginService implements CanActivate{

  constructor(private Token: TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.Token.loggedIn() || !this.Token.getRole()) {
      return false;
    }
 
    console.log(route.data);
    if (route.data.role) {
      return (route.data.role as string[]).includes(this.Token.getRole());
    }
    return true;
  }
  
}  
