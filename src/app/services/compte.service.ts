import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private _urlgetcmpt:  string = "http://localhost:8000/api/comptpart";
  private _urlsetcmpt:  string = "http://localhost:8000/api/compteuser";


  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  constructor(private http: HttpClient) { }

  getCompte():Observable<any>
  {
    return this.http.get(this._urlgetcmpt,{headers:this.headers})
      
  }

  setCompte(data):Observable<any>
  {
    return this.http.post<any>(this._urlsetcmpt,data,{headers:this.headers});
  }
}
