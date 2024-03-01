import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient){}
  url:string="http://localhost:5143/api/Registeration/"; 

  public Register(register:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    httpOptions.headers = httpOptions.headers.set('Authorization', '');
    
    return this.http.post<any>(this.url+"Registration",register,httpOptions);
  }
  

}
