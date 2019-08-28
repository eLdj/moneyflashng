import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable()
export class AuthService {

  host2:string = "http://localhost:8000/api/login_check";
  jwt:string;
  username:string;
  prenom:string;
  roles:Array<string>;


  constructor(private http: HttpClient) { }


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
    console.log(this.roles);
  }

  isAdmin(){
    return this.roles.indexOf('ROLE_SUPER_ADMIN')>=0;
  }

  isAdminPart(){
    return this.roles.indexOf('ROLE_SUPER_ADMIN_PARTENAIRE')>=0;
  }
}
 