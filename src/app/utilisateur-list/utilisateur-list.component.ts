import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  public listuser = [];
 

  constructor(private user : UtilisateurService) { }

  ngOnInit() {
    this.user.listUser()
    .subscribe(
      data => {
        this.listuser = data
        console.log(data)
      },
      err => console.log(err)
    );
   
  }  
  
  userBlock(id)
  {
    this.user.userBlock(id)
    .subscribe(
      data =>{  
        console.log(data);
        this.ngOnInit()
      },
      err => console.log(err)
    )
  }

}
