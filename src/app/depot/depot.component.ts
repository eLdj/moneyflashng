import { Component, OnInit } from '@angular/core';
import { DepotService } from '../services/depot.service';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { Depot } from '../entity/depot';
import { Compte } from '../entity/compte';
import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  public compte = new Compte();
  public depot = new Depot();
 

  constructor(private dpt: DepotService, private fb: FormBuilder,private orderPipe: OrderPipe) { }


  findNumForm = this.fb.group({

    numero :[this.compte.numero],

  });

  depotForm = this.fb.group({

    numero :[this.compte.numero],
    montant_depot:[this.depot.montant_depot]

  })

  ngOnInit() {
  }

  findNum()
  {
    this.dpt.findNum(this.findNumForm.value)
    .subscribe(
      data => {this.compte = data
     console.log(this.compte)
      },
      err => console.log(err)
    )
  }

  depotCompte()
  {
    this.dpt.depot(this.depotForm.value)
    .subscribe(
      data => { this.depot = data
         console.log(this.depot)},
      err => console.log(err)
    )
  }

}
