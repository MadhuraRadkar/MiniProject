import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  public getAllCategories():Observable<any>
      {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
          })
        };
        httpOptions.headers = httpOptions.headers.set('Authorization', '');
        // get is for Http get requ,
        // observaable is for to make async call with api & cast result in JSON by default.
        return this.http.get<any>("http://localhost:5143/api/Category/"+"GetCategories");  // localhost:5190/api/Book/GetBooks
      }

  public AddProduct(product:any):Observable<any> 
  { 
    const httpOptions = { 
      
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.post<any>(this.url+"AddProduct",product,httpOptions); 
  } 
 
  public UpdateProduct(product:any):Observable<any> 
  { 
    const httpOptions = { 
    
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
    
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.put<any>(this.url+"UpdateProduct",product,httpOptions); 
  } 
  public DeleteProduct(id:number):Observable<any> 
  { 
    const httpOptions = { 
       
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
   
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.delete<any>(this.url+"DeleteProduct/"+id,httpOptions); 
  } 


  public uploadImage(formData:FormData):Observable<any>{
    return this.http.post<any>(this.url+'uploadImage',formData);
      }


addToCartService(param:{},apiUrl:string):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
  return this.http.post(this.url+apiUrl, param, httpOptions);
}

 
// Confirmation page...
public GetProductById(id:number):Observable<any> 
      { 
        const httpOptions = { 
          headers: new HttpHeaders({ 
            'Content-Type':  'application/json', 
          }) 
        }; 
        httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
        // get is for Http get requ, 
        // observaable is for to make async call with api & cast result in JSON by default. 
        return this.http.get<any>(this.url+"GetProductById/"+id,httpOptions);  // localhost:5190/api/Book/GetBooks 
      }

}
