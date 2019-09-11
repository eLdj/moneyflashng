import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.css']
})
export class NavsideComponent implements OnInit {

  constructor(private auth: AuthService) { }
  

  ngOnInit() {
  }

  isAdmin(){
    return this.auth.isAdmin();
  }
  isAdminPart(){
    return this.auth.isAdminPart();
  }

  isSupAdminPart(){
     return this.auth.isSupAdminPart();
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

  loggedIn(){
    return this.auth.loggedIn();
  }
  
}
