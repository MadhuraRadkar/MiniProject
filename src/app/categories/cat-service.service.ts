import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:5143/api/Category/";

  getAllCategories():Observable<any> 
  { 
    const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json' 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
    return this.http.get<any>(this.url+"GetCategories",httpOptions);
  } 

  public AddCategory(category:any):Observable<any> 
  { 
    const httpOptions = { 
      
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.post<any>(this.url+"AddCategory",category,httpOptions); 
  } 
 
  public UpdateCategory(category:any):Observable<any> 
  { 
    const httpOptions = { 
    
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
    
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.put<any>(this.url+"UpdateCategory",category,httpOptions); 
  } 
  public DeleteCategory(cid:number):Observable<any> 
  { 
    const httpOptions = { 
       
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
   
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.delete<any>(this.url+"DeleteCategory/"+cid,httpOptions); 
  } 

}
