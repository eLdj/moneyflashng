export class Compte {

    constructor(

        public montant:number = null,
        public date_depot = null,
        public numero: number =null,
       
        public depots = null,
       // public utilisateurs = null,
        public transactions = null,
        public nienea = null,
        public raisonSociale = null,
        


    ){}

     partenaire : {
       ninea: string,
        raisonSociale: string ,
        telephoneP: string,
        emailP: string,
        statut: string
    }

    utilisateurs : {
        username: string,
        
    }
  
}

