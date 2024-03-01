import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   constructor(private http:HttpClient) { }
  url="http://localhost:5143/api/Product/";

  GetProducts():Observable<any> 
  { 
    const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json' 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
    return this.http.get<any>(this.url+"GetProducts",httpOptions);
  } 
}
