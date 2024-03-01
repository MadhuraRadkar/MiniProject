import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';
import { OrdersService } from '../orders/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  rid:string | null=localStorage.getItem('rid'); 
  constructor(private CartService:CartService,private OrdersService:OrdersService,private router:Router) { } 
  roleid:any; 
  

  ngOnInit(): void { 
    this.getCart(); 
    this.roleid=localStorage.getItem('roleId'); 
  } 
  
  CartList:any=[]; 
  getCart(){ 
    if(this.rid !== null){ 
      let rid=parseInt(this.rid); 
     
    this.CartService.getCart(rid).subscribe(result=>{ 
      this.CartList=result;   
  }); 
}

  }


  BuyNow(id:number): void { 
    
    this.router.navigate(['/confirm',id]);
  //   this.OrdersService.BuyNow(id).subscribe(res=>{ 
  //     // alert('Your Order is Placed')  
     
  // });
  
  }

  delete(id:number){
    let result=confirm('Do you want to remove item from cart!');
    if(result==true){
    this.CartService.DeleteFromCart(id).subscribe(result=>{
        alert('Removed from cart!');
        this.getCart();
    
  });}
  
  }


}
