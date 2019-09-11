import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  messageError;
  constructor(private auth: AuthService,private _router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
   // console.log(data);
    this.auth.login(data)
      .subscribe(resp=>{
        let jwt = resp.body['token'];
        this.auth.saveToken(jwt); 
        if(this.auth.isAdmin()){
          
          this._router.navigate(['/partenaire-list'])

        }else if(this.auth.isSupAdminPart() || this.auth.isAdminPart()){

          this._router.navigate(['/utilisateur-list'])
        }
        else if(this.auth.isCaissier()){

          this._router.navigate(['/depot'])

        }else if(this.auth.isUserPart()){

          this._router.navigate(['/transaction'])
        }
       // console.log();
      },err=>{
        this.messageError =err.status
        console.log( this.messageError );       
        // if(this.messageError){
        //   Swal.fire({
        //     type: 'error',
        //     title: '<h2> Infos Transaction </h2><hr/>',
        //     html: '<h2>'+this.messageError+'<h2>',
        //   })
        // }
        if(err instanceof HttpErrorResponse) {
          if(err.status===401){
            this._router.navigate(['/login'])
          }
        }
      })
  }
}
