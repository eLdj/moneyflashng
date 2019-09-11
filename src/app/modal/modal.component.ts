import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(){
    
  }

  logout()
  {
    return this.auth.logout();
  }
}
