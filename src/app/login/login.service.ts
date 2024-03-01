import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}
  url:string="http://localhost:5143/api/Registeration/"; 
  public Login(user:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    // const token = localStorage.getItem('token');
    httpOptions.headers = httpOptions.headers.set('Authorization','');
    
    return this.http.post<any>(this.url+"Login",user,httpOptions);
      }
}
