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
    this.auth.loggedIn();
  }
}
