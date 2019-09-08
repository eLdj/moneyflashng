import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Partenaire } from '../entity/partenaire';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  constructor(private _http: HttpClient) { }

  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
  
  private _urllist: string = "http://localhost:8000/api/listusers";
  private _urlblock: string = "http://localhost:8000/api/userblock/";
  private _urluser: string = "http://localhost:8000/api/listusers/"; 


  listUser():Observable<any>
  {
    return this._http.get<any>(this._urllist,{headers:this.headers});
  }

  userBlock(id):Observable<any>
  {
    return this._http.get<any>(this._urlblock+`${id}`,{headers:this.headers});
  }

  onUser(id):Observable<any>
  {
    return this._http.get<any>(this._urluser+`${id}`,{headers:this.headers});
  }
}
