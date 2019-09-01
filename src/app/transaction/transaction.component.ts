import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../entity/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  transModel = new Transaction();
  transInfos = [];
  constructor(private fb: FormBuilder,private transService: TransactionService) { }
 
  transactionForm = this.fb.group({
    
    montantTransfert: [this.transModel.montantTransfert],
      nom_complet_e:[this.transModel.nom_complet_e] ,
      tel_e:[this.transModel.tel_e] ,
      adresse_e: [this.transModel.adresse_e] ,
      cin_e:[this.transModel.cin_e],
      nom_complet_b:[this.transModel.nom_complet_b],
      tel_b: [this.transModel.tel_b],
      cin_b:[this.transModel.cin_b],
      adresse_b:[this.transModel.adresse_b]

  })
  
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.transactionForm.value);
    this.transService.envoie(this.transactionForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      )
  }



}
 