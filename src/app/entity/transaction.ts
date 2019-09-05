import { DatePipe } from '@angular/common';

export class Transaction {

    constructor(
        montant_transfert: number = null,
        nom_complet_e: string = null,
        tel_e: string = null,
        adresse_e: string = null ,
        cin_e: string = null,
        nom_complet_b: string = null,
        tel_b: string = null,
        cin_b: string = null,
        adresse_b: string = null,
    

    ){}


    public nom_complet_e: string; 
    public adresse_e: string;
    public tel_e: string; 
    public cin_e: string;
    
    public nom_complet_b: string;
    public adresse_b: string;
    public tel_b: string; 
    public cin_b: string; 

    public montant_transfert: number ;
    public created_at;
    public code_genere: string;
    public frais_transaction: number;
    public total_envoi: number;
    public commission_etat: number;
    public commission_systeme: number;
    public commission_retrait: number;
    public commission_envoie: number;
    public statut:string; 
    public date_retrait; 
   
    
  
}
