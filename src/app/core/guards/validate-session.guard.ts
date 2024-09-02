import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie:string | null = this.cookieService.get('token_session'); //aqui consultaremos la cookie al navegador

  constructor(private router:Router, private cookieService:CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie(); //booleano que si va a dejar continuar o no
  }

  private checkCookie():boolean{
    console.log(this.cookie)
   
    if(!this.cookie){
      this.router.navigate(['/','auth','login'])
      return false;
    }

    return true;

     
  }
  
}
