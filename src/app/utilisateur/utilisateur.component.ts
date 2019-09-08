import { Component, OnInit } from '@angular/core';
import { Partenaire } from '../entity/partenaire';
import { PartenaireService } from '../services/partenaire.service';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from '../services/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  partModel = new Partenaire();
  erroMsg = '';
  imageUrl:string="/assets/img/test.png";
  
  rolesPart = ['ROLE_ADMIN_PARTENAIRE','ROLE_USER_PARTENAIRE'];
  profils = ["ADMIN_SYSTEM","CAISSIER","ADMIN_PARTENAIRE","USER_PARTENAIRE"];

  constructor(private _partService: PartenaireService,http: HttpClient,private user: UtilisateurService, public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

    this.user.onUser(this.id)
    .subscribe(
      data =>{
        this.partModel=data
      },
      err => console.log(err)
    )
  }

  handleFileInput(file : FileList){
    this.partModel.imageFile = file.item(0); 
    var reader =  new  FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }

    reader.readAsDataURL(this.partModel.imageFile);
  }

  onSubmit(){
    this._partService.userAdd(this.partModel)
    .subscribe(
      data => console.log('Succees!', data),
      error => this.erroMsg = error.statusText 
    );
  }

}
