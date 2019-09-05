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
  code = this.data.code_genere;
  cin_b = this.data.cin_b;
  affiche: boolean = false;
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

  retraitForm = this.fb.group({

    code_genere:[this.code],
    cin_b:[this.cin_b]

  })

  
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.transactionForm.value);
    this.transService.envoie(this.transactionForm.value)
      .subscribe(
        response =>{
          this.transInfos = [response.codeGenere,response.nomCompletB]
          console.log(this.transInfos[0])
        } ,
        error => console.error('Error!', error)
      )
  }
//fonction retrait avec recceuil d'information avant retrait
  findCode(){
    this.transService.findcode(this.findCodeForm.value)
    .subscribe(
      data => {
        Swal.fire({
         
          type: 'info',
          title: '<h2> Infos Transaction </h2><hr/>',
          html: 
                '<h5>***********Expediteur************</h5>'
                +'<p> Nom : '+data.nomCompletE+'<br>'
                +'Adresse: '+data.adresseE+'<br>'
                +'Téléphone: '+data.telE+'<br>'
                +'Numéro d\'identification : '+data.cinE+'<br> </p>'
                +'<h5>*********Bénéficiaire***********</h5>'
                +'<p> Nom : '+data.nomCompletB+'<br>'
                +'Adresse : '+data.adresseB+'<br>'
                +'Téléphone : '+data.telB+'<br>'
                +'Code d\'envoi : '+data.codeGenere+'<br>'
                +'Montant envoyé : '+data.montantTransfert+'<br>'
                +'Frais : '+data.fraisTransaction+'<br>'
                +'Total envoi : '+data.totalEnvoi+'<br>'
                +'Date envoi : '+data.createdAt+'</p>',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Continuez vers le retrait'
        }).then((result) => {
          if (result.value) {
            this.affiche = true;
          }
        })
      },
      err =>{
          this.erreur = err.error.error.exception[0].message
          console.log(this.erreur)
          if(err.message.search('403')>=0){
            Swal.fire(
                'Erreur',
                'Ce code n\'existe pas vérifiez l\'entrée !',
                'error'
              )
            } else if(err.message.search('404')>=0){
              Swal.fire(
                  'Erreur',
                  'Pas autorisé !',
                  'error'
                )}
            
            
            else{
              Swal.fire(
                'Attention',
                'Ce code a été retiré!',
                'warning'
              )
            }
      },
    );
  }

  retrait(){
    this.transService.retrait(this.retraitForm.value)
    .subscribe(
      data => { 
        console.log(data)
        Swal.fire({
          type: 'info',
          title: '<h2> Infos Transaction </h2><hr/>',
          html: 
                '<h5>***********Expediteur************</h5>'
                +'<p> Nom : '+data.nomCompletE+'<br>'
                +'Adresse: '+data.adresseE+'<br>'
                +'Téléphone: '+data.telE+'<br>'
                +'<h5>*********Bénéficiaire***********</h5>'
                +'<p> Nom : '+data.nomCompletB+'<br>'
                +'Adresse : '+data.adresseB+'<br>'
                +'Téléphone : '+data.telB+'<br>'
                +'Numéro d\'identification : '+data.cinB+'<br> </p>'
                +'Code d\'envoi : '+data.codeGenere+'<br>'
                +'Montant retiré : '+data.montantTransfert+'<br>'
                +'Date de retrait : '+data.dateRetrait+'</p>',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Continuez vers le retrait'
        })
      },
      err =>{
        this.erreur = err.error.error.exception[0].message
        console.log(this.erreur)
        if(err.message.search('403')>=0){
          Swal.fire(
              'Erreur',
              'Ce code n\'existe pas vérifiez l\'entrée !',
              'error'
            )
          } else if(err.message.search('404')>=0){
            Swal.fire(
                'Erreur',
                'Pas autorisé !',
                'error'
              )}
          
          
          else{
            Swal.fire(
              'Attention',
              'Ce code a été retiré!',
              'warning'
            )
          }
    }
    )
    this.affiche = false;
  }
}
 