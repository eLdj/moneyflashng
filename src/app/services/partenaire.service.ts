import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Partenaire } from '../entity/partenaire';
import { AuthService } from './auth.service';
import {  Observable,Subject } from 'rxjs/';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class PartenaireService {
 
  private _urlpartlist: string = "http://localhost:8000/api/listparts";
  private _urlpartadd: string = "http://localhost:8000/api/inscrit";
  private _urluseradd: string = "http://localhost:8000/api/adduser";
  private _urlpartblosck: string = "http://localhost:8000/api/partblock/";
  private _urlpartupdate: string = "http://localhost:8000/api/partupdate/";
  private _urlgetpart: string = "http://localhost:8000/api/listpart/";
  
  constructor(private httpClient: HttpClient) { }

  private _refresh$ = new Subject<void>();

  get refresh$()
  {
    return this._refresh$;
  }
  
  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    getPartenaire(): Observable<Partenaire[]>{
      
      return this.httpClient.get<Partenaire[]>(this._urlpartlist,{headers:this.headers});
      
    } 

    getPart(id):Observable<Partenaire>{
      return this.httpClient.get<Partenaire>(this._urlgetpart+id,{headers:this.headers});
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
      return this.httpClient.post<Partenaire>(this._urlpartadd, formData,{headers:this.headers})
        .pipe(catchError(this.errorHandlerpost))
   
    }



    

    userAdd(data: Partenaire):  Observable<Partenaire>
    {
      const formData: FormData = new FormData();
      formData.append('nom',data.nom);
      formData.append('prenom',data.prenom);
      formData.append('telephone',data.telephone);
      formData.append('adresse',data.adresse);
      formData.append('email',data.email);
      formData.append('username',data.username);
      formData.append('password',data.password);
      formData.append('password',data.password);
      formData.append('profil',data.profil);
      formData.append('imageFile',data.imageFile);

      return this.httpClient.post<Partenaire>(this._urluseradd,formData,{headers:this.headers})
      .pipe(catchError(this.errorHandlerpost))
    }

    blockPart(id): Observable<any>
    {
      return this.httpClient.get<any>(this._urlpartblosck+id,{headers:this.headers})
          .pipe(
            tap(()=>{
              this._refresh$.next();
            })
          );
    }

    updatePart(id):Observable<any>
    {
      return this.httpClient.put<any>(this._urlpartupdate+id,{headers:this.headers})
    }

    // imageUpload(image){
    //   this.httpClient.post(this._urlpartadd,image);
    // }

    errorHandlerpost(error: HttpErrorResponse){
      return throwError(error);
    }
}   
