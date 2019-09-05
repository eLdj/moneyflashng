import { Injectable } from '@angular/core';
import { Transaction } from '../entity/transaction';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _urltransenv = "http://localhost:8000/api/envoi";
  private _ulrtransret = "http://localhost:8000/api/retrait";
  private _urlfindcode = "http://127.0.0.1:8000/api/findcode";

  constructor(private _http: HttpClient) { }

  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  envoie(transaction)
  {
    return this._http.post<any>(this._urltransenv,transaction,{headers:this.headers})
    .pipe(catchError(this.errorHandlerpost))
  }

  findcode(data)
  {
    return this._http.post<any>(this._urlfindcode,data,{headers:this.headers})
    .pipe(catchError(this.errorHandlerpost))

  }

  retrait(data)
  {
    return this._http.post<any>(this._ulrtransret,data,{headers:this.headers})
  }
  errorHandlerpost(error: HttpErrorResponse){
    return throwError(error);
  }
}
