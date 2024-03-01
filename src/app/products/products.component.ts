import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from './products.service';
import { Products } from './products';
import { CartService } from '../cart/cart.service';
import {OrdersService} from '../orders/orders.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  userRoleId:any;
  constructor(private fb:FormBuilder,private productsService:ProductsService,private cartservice:CartService,private OrdersService:OrdersService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    
    this.userRoleId=localStorage.getItem('roleId');
    this.rid=localStorage.getItem('rid');
    this.GetProducts();
    this.getAllCategories();
  }
 isUpdatedBtn:boolean=false;

 prodList: any[] = [];
  selectedFile!: File;
  imageUrl: string | null = null;
  rid:any;

 prodForm=this.fb.group({
  id:[],
  name:['',Validators.required],
  price:[,Validators.required],
   imageUrl:[''],
  cid:[,Validators.required]
  
 });
 // get properties for each control
 get id(){
  return this.prodForm.get('id');
 }
 get name(){
  return this.prodForm.get('name');
 }
get price(){
  return this.prodForm.get('price');
}
// get imageUrl(){
//   return this.prodForm.get('imageUrl');
// }
get cid(){
  return this.prodForm.get('cid');
}

GetProducts(){
  this.productsService.GetProducts().subscribe(result=>{
    this.prodList=result;
  });
}

catgList:any=[];
getAllCategories(){
  this.productsService.getAllCategories().subscribe(result=>{
    this.catgList = result;
  });
}
saveImage(event: any) {
  this.selectedFile = event.target.files[0];
   
    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   this.imageUrl = e.target?.result as string;
    // };
    //reader.readAsDataURL(this.selectedFile);
    const reader = new FileReader();
    reader.readAsArrayBuffer(this.selectedFile);
    reader.onload = () => {
      if (reader.result!==null) {

      const blob = new Blob([reader.result],{ type:this.selectedFile.type});
      
      const formData = new FormData();
    formData.append('image', blob,this.selectedFile.name);
    this.uploadImage(blob); 
      }
     
    };
}

uploadImage(blob: Blob): void {
  const formData = new FormData();
  formData.append('image', blob, this.selectedFile.name);
  this.productsService.uploadImage(formData).subscribe(result=>{
      console.log('This is result '+ result.url);
     this.imageUrl=result.url;
  });
}

edit(product:any){
this.isUpdatedBtn=true;
this.prodForm.setValue({
   id:product.id,
name:product.name,
price:product.price,
 imageUrl:product.imageUrl,
cid:product.cid
});
this.imageUrl = product.imageUrl;
// this.saveImage({ target: { files: [] } });
}
delete(id:number){
  let result=confirm('Do you want to delete ?');
  if(result==true){
    this.productsService.DeleteProduct(id).subscribe(res=>{
      alert('Record deleted');
      this.GetProducts();
      this.clearForm();
    })
  }
  this.GetProducts();
  this.clearForm();
}
product:Products={};
saveProduct()
{
  // const product:Products={
  //  name:this.prodForm.value.name,
  //  price:this.prodForm.value.price,
  //  imageUrl:this.imageUrl,
  //  cid:this.prodForm.value.cid

  this.product.name=this.prodForm.value.name,
  this.product.price=this.prodForm.value.price,
  this.product.imageUrl=this.imageUrl,
  this.product.cid=this.prodForm.value.cid;
  
if(!this.isUpdatedBtn){
// id:this.prodForm.value.id
   this.productsService.AddProduct(this.product).subscribe(res=>{
    alert('Record inserted');
    this.GetProducts();
    this.clearForm();
   });
}
else{
  this.product.id=this.prodForm.value.id;
  this.productsService.UpdateProduct(this.product).subscribe(res=>{ 
    alert('Record updated');
    this.GetProducts();
    this.clearForm();
   });
  //  this.isUpdatedBtn=false;
}
this.clearForm();
}

clearForm()
{
  this.prodForm.reset();
  this.imageUrl= null;
  this.selectedFile!;

}

addToCart(id:number): void { 
    
  this.cartservice.AddToCart(id).subscribe(res=>{ 
    alert('successfully added') 
   
});

}

BuyNow(id:number): void { 
  this.router.navigate(['/confirm',id]);
  
    
//   this.OrdersService.BuyNow(id).subscribe(res=>{ 
//     // alert('Your Order is Placed') 
    
// });

}
}
