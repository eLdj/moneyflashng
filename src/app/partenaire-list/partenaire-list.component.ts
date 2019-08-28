import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.css']
})
export class PartenaireListComponent implements OnInit {

  public partenaire = [];
  public errorMsg;
  constructor(private _partService: PartenaireService) { }

  ngOnInit(){
    this._partService. getPartenaire()
    .subscribe(data => this.partenaire = data,
      error => this.errorMsg = error
      );
  }

}
