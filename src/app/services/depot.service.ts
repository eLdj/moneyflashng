import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private _http: HttpClient) { }

  private headers= new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

  public _urldepot: string = "http://localhost:8000/api/depot";
  public _urlfindnum: string = "http://localhost:8000/api/findnum";


  depot(data):Observable<any>
  {
    return this._http.post<any>(this._urldepot,data,{headers:this.headers})
  }


  findNum(data):Observable<any>
  {
    return this._http.post<any>(this._urlfindnum,data,{headers:this.headers})
  }
}
