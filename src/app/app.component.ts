import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moneyflashng';
constructor(private auth: AuthService){}

  isAdmin(){
    return this.auth.isAdmin();
  }

  isAdminPart(){
    return this.auth.isAdminPart();
  }
}
