import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import {Partenaire } from '../entity/partenaire';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-partenaire-add',
  templateUrl: './partenaire-add.component.html',
  styleUrls: ['./partenaire-add.component.css']
})
export class PartenaireAddComponent implements OnInit {
 
  partModel = new Partenaire();
  erroMsg = '';
  imageUrl:string="/assets/img/test.png"
  constructor(private _partService: PartenaireService,http: HttpClient) { }

  ngOnInit() {
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
    this._partService.partenaireAdd(this.partModel)
    .subscribe(
      data => console.log('Succees!', data),
      error => this.erroMsg = error.statusText 
    );
  }

  

  // onUpdload() {
  //   const fd = new FormData();
  //   fd.append('imageFile', this.partModel.imageFile, this.partModel.imageFile.name);
  // }

}
