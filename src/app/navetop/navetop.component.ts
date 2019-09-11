import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navetop',
  templateUrl: './navetop.component.html',
  styleUrls: ['./navetop.component.css']
})
export class NavetopComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }


  loggedIn(){
    return this.auth.loggedIn();
  }
  
  isAdmin(){
    return this.auth.isAdmin();
   }
 
   isSupAdminPart(){
     return this.auth.isSupAdminPart();
   }
   isAdminPart(){
    return this.auth.isAdminPart();
  }
   isCaissier(){
     return this.auth.isCaissier();
   }
 
   isUserPart(){
     return this.auth.isUserPart();
   }
 
   isAdminSyst(){
     return this.auth.isAdminSyst();
   }
   user(){
    return this.auth.username;
   }
}
