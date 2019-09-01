export class Transaction {

    constructor(
       public montantTransfert: number = null,
       public  nom_complet_e: string = null,
       public tel_e: string = null,
       public adresse_e: string = null ,
       public cin_e: string = null,
       public nom_complet_b: string = null,
       public tel_b: string = null,
       public cin_b: string = null,
       public adresse_b: string = null

    ){

    }
}
