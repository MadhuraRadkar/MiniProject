import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  rid:string | null=localStorage.getItem('rid'); 
  constructor(private OrdersService:OrdersService) { } 
  roleid:any; 
  

  ngOnInit(): void { 
    this.MyOrders(); 
    this.roleid=localStorage.getItem('roleId'); 
  } 
  
  OrderList:any=[]; 
  MyOrders(){ 
    if(this.rid !== null){ 
      let rid=parseInt(this.rid); 
     
    this.OrdersService.MyOrders(rid).subscribe(result=>{ 
      this.OrderList=result;   
  }); 
}

  }
}
