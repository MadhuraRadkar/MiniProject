import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Cart} from './cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:5143/api/Cart/";


  cart:Cart={}; 
  public AddToCart(Id:number):Observable<any> 
    { 
      const storedUserId: string | null = localStorage.getItem('rid'); 
      if(storedUserId !== null) 
      { 
      this.cart.Rid=parseInt(storedUserId ); 
      } 
      this.cart.id=Id; 
      const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
       
       
      return this.http.post<any>(this.url+"AddToCart",this.cart,httpOptions); 
    }


    public getCart(id:number):Observable<any> 
    { 
      const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      // get is for Http get requ, 
      // observaable is for to make async call with api & cast result in JSON by default. 
      return this.http.get<any>(this.url+"GetCart/"+id,httpOptions);  // localhost:5190/api/Book/GetBooks 
    }


    // Orders...
    BuyNowService(param:{},apiUrl:string):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      return this.http.post(this.url+apiUrl, param, httpOptions);
    }



    public DeleteFromCart(id:number):Observable<any> 
    { 
      const httpOptions = { 
         
          headers: new HttpHeaders({ 
            'Content-Type':  'application/json', 
          }) 
        }; 
     
        httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
        return this.http.delete<any>(this.url+"DeleteFromCart/"+id,httpOptions); 
    } 
  
}
