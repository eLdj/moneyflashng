import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../entity/transaction';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  //const Swal = require('sweetalert2');
  transModel = new Transaction();
  transInfos = [];
  infosCode = [];
  data = new Transaction;
  code = this.data.code_genere ;
  public erreur;
  constructor(private fb: FormBuilder,private transService: TransactionService) { }
 
  transactionForm = this.fb.group({
    
    montant_transfert:[''],
      nom_complet_e:[''] ,
      tel_e:[''] ,
      adresse_e: [''] ,
      cin_e:[''],
      nom_complet_b:[''],
      tel_b:[''],
      adresse_b:['']

  })

  findCodeForm = this.fb.group({

      code_genere:[this.code]

  })
  
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.transactionForm.value);
    this.transService.envoie(this.transactionForm.value)
      .subscribe(
        response =>{
          this.transInfos = response
          console.log(response)

        } ,
        error => console.error('Error!', error)
      )
  }

  findCode(){
    this.transService.findcode(this.findCodeForm.value)
    .subscribe(
      data => {
        this.infosCode = [data.adresseB,data.codeGenere]
        console.log(this.infosCode[1])
      },
      err =>{
          this.erreur = err.error.error.exception[0].message
          console.log(this.erreur)
      },
    );
  }
}
 