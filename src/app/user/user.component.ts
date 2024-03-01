import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private fb:FormBuilder,private productsService:UserService){}

  ngOnInit(): void {
    this.GetProducts();
  }

  prodList: any[] = [];
  GetProducts(){
    this.productsService.GetProducts().subscribe(result=>{
      this.prodList=result;
    });
  }

  addToCart(product: any) {
    // Implement your logic for adding the product to the cart
    console.log(`Product added to cart: ${product.name}`);
  }
  
}
