import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Partenaire } from '../entity/partenaire';
import { AuthService } from './auth.service';
import {  Observable } from 'rxjs/';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class PartenaireService {
 
  private _urlpartlist: string = "http://localhost:8000/api/listparts";
  private _urlpartadd: string = "http://localhost:8000/api/inscrit";
  constructor(private httpClient: HttpClient) { }
  
  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    getPartenaire(): Observable<Partenaire[]>{
      
      return this.httpClient.get<Partenaire[]>(this._urlpartlist,{headers:this.headers});
      
    } 
   
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }

   
    partenaireAdd(data: Partenaire): Observable<Partenaire>
    {
      const formData: FormData = new FormData();
      formData.append('raisonSociale',data.raisonSociale);
      formData.append('ninea',data.ninea);
      formData.append('siege',data.siege);
      formData.append('telephoneP',data.telephoneP);
      formData.append('emailP',data.emailP);
      formData.append('nom',data.nom);
      formData.append('prenom',data.prenom);
      formData.append('telephone',data.telephone);
      formData.append('adresse',data.adresse);
      formData.append('email',data.email);
      formData.append('username',data.username);
      formData.append('password',data.password);
      formData.append('imageFile',data.imageFile);
      return this.httpClient.post<Partenaire>(this._urlpartadd,formData,{headers:this.headers})
        .pipe(catchError(this.errorHandlerpost))
   
    }

    // imageUpload(image){
    //   this.httpClient.post(this._urlpartadd,image);
    // }

    errorHandlerpost(error: HttpErrorResponse){
      return throwError(error);
    }
}   
