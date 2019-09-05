import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  constructor(private auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
   // console.log(data);
    this.auth.login(data)
      .subscribe(resp=>{
        let jwt = resp.body['token'];
        this.auth.saveToken(jwt);
        
        if(this.isAdmin() || this.isAdminPart()){
          this._router.navigate(['/partenaire-list'])
        }
       // console.log();
      },err=>{
        console.log(err); 
        if(err.message.search('401')){
          Swal.fire(
              'Erreur',
              'Mot de passe ou login incorect !',
              'error'
            )
          }else if(err.message.search('404')>=0){
            Swal.fire(
              'Attention',
              'Ressource non trouvé',
              'warning'
            )
          }
      }) 
  }
  
  isAdmin(){
    return this.auth.isAdmin();
  }

  isAdminPart(){
    return this.auth.isAdminPart();
  }
}
