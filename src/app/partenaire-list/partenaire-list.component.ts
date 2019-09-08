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
    this._partService.getPartenaire()
    .subscribe(data => this.partenaire = data,
      error => this.errorMsg = error
      );
  }

  partBlock(id)
  {
    if (window.confirm('Etes vous sûr de vouloir bloquer cet partenaire'))
    {
      this._partService.blockPart(id)
      .subscribe(
        data=>{
          console.log(data)
          this.ngOnInit()
        },    
        err=>console.log(err)
      );
      
    }
   
  }
}
