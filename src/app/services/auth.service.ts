import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({ providedIn: 'root' })
export class AuthService {

 
  host2:string = "http://localhost:8000/api/login_check";
  jwt:string;
  username:string;
  roles:Array<string>;


  constructor(private http: HttpClient,private _router: Router) { }


  login(data:any){
   return this.http.post(this.host2, data,{observe:'response'});
 
  }

  saveToken(jwt: string){
    localStorage.setItem('token',jwt); 
    this.jwt=jwt;
    this.parseJWT();
  }
 
  parseJWT(){
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);   
    this.username = objJWT.username;
    this.roles = objJWT.roles;
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }

  isSupAdminPart(){

    return this.roles.indexOf('ROLE_SUPER_ADMIN_PARTENAIRE')>=0 ;
  }

  isAdmin(){
  
    return this.roles.indexOf("ROLE_SUPER_ADMIN")>=0;
   
  }

  isAdminPart(){
    
   return this.roles.indexOf("ROLE_ADMIN_PARTENAIRE")>=0;
  }

  isCaissier(){
    return this.roles.indexOf("ROLE_CAISSIER")>=0;
  }

  isUserPart(){
    return this.roles.indexOf("ROLE_USER_PARTENAIRE")>=0;
  }

  isAdminSyst(){
    return this.roles.indexOf("ROLE_ADMIN_SYSTEM")>=0;
  }

  isAuthenticated(){

    return ( this.isAdmin() || this.isUserPart() || this.isSupAdminPart() || this.isCaissier() );
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
 