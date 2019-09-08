import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate,Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

    constructor(private _autService: AuthService, private _router: Router){ }


    canActivate(): boolean {
      if(this._autService.loggedIn()){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }
  
}
