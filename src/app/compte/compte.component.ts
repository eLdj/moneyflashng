import { Component, OnInit } from '@angular/core';
import { CompteService } from '../services/compte.service';
import { FormBuilder } from '@angular/forms';
import { Compte } from '../entity/compte';
import { OrderPipe } from 'ngx-order-pipe';
import { Partenaire } from '../entity/partenaire';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  listcompte = [];
  infos = [];
  compte = new Compte();
  user = new Partenaire();
  constructor(private cmpt: CompteService, private fb: FormBuilder,private orderPipe: OrderPipe) { }

  ngOnInit() {
    this.getCompte()
  }

  compteForm = this.fb.group({

    username : [this.user.username],
    numero : [this.compte.numero]

  })

  getCompte(){
    return this.cmpt.getCompte()
      .subscribe(
        resp =>{
          this.listcompte = resp
          console.log(this.listcompte);
        },
        err => console.log(err)
      )
  }

  alloueCmpt(){
    return this.cmpt.setCompte(this.compteForm.value)
    .subscribe(
      resp =>{
        this.infos = resp
        Swal.fire({
          type: 'success',
          title: '<h2> allocation de compte </h2><hr/>',
          html: 
                '<h5>'+resp+'</h5>',
          confirmButtonColor: '#3085d6',  
        })
        console.log(resp)
        this.ngOnInit();
      },
      err =>{
        console.log(err)
        Swal.fire({
          type: 'error',
          title: '<h2> Infos Transaction </h2><hr/>',
          html: 
                '<h5>'+err.error.error.exception[0].message+'</h5>',
          confirmButtonColor: '#3085d6',  
        })

      } 
    )
  }
}
