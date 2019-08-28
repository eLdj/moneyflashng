import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Partenaire } from '../entity/partenaire';
import { AuthService } from './auth.service';
import {  Observable } from 'rxjs/';
@Injectable()
export class PartenaireService {
 
  private _url: string = "http://localhost:8000/api/listparts";
  
  constructor(private httpClient: HttpClient) { }

    getPartenaire(): Observable<Partenaire[]>{
      return this.httpClient.get<Partenaire[]>(this._url);
    } 
   
    errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
    }
}   
