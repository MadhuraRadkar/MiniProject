import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:5143/api/Order/";


  Orders:Orders={}; 
  public BuyNow(id:number):Observable<any> 
    { 
      const storedUserId: string | null = localStorage.getItem('rid'); 
      if(storedUserId !== null) 
      { 
      this.Orders.Rid=parseInt(storedUserId ); 
      } 
      this.Orders.id=id; 
      const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
       
       
      return this.http.post<any>(this.url+"BuyNow",this.Orders,httpOptions); 
    }

    public MyOrders(id:number):Observable<any> 
    { 
      const httpOptions = { 
        headers: new HttpHeaders({ 
          'Content-Type':  'application/json', 
        }) 
      }; 
      httpOptions.headers = httpOptions.headers.set('Authorization', ''); 
      // get is for Http get requ, 
      // observaable is for to make async call with api & cast result in JSON by default. 
      return this.http.get<any>(this.url+"MyOrders/"+id,httpOptions);  // localhost:5190/api/Book/GetBooks 
    }

}
