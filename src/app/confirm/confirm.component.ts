import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders/orders.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  productId:number=0;
  constructor(private productservice:ProductsService,private route:ActivatedRoute,private orderservice:OrdersService) { }

  ngOnInit(): void {
    //debugger
    this.route.params.subscribe(params=>{
      this.productId=+params['id'];
    });
    this.GetProductById(this.productId);
  }
  Product:any=[];
  GetProductById(id:number){
    this.productservice.GetProductById(id).subscribe(res=>{
      this.Product=res;
    });
  }

  // BuyNow(id:number): void { 
    
  //   this.orderservice.BuyNow(id).subscribe(res=>{ 
  //     // alert('Your Order is Placed') 
  //    alert('Your order is placed')
  // });
  
  //}
  
  BuyNow(id:any){
    var result=confirm("do you want buy the product");
    if(result){
    this.orderservice.BuyNow(id).subscribe(res=>{ 
      alert('Your Order is Placed') 
  });
  }
  
    }


}
