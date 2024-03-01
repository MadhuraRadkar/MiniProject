import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CatServiceService } from './cat-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  userRoleId:any;
  constructor(private fb:FormBuilder,private categoryservice:CatServiceService){}
  ngOnInit(): void {
    this.userRoleId=localStorage.getItem('roleId');
    
    this.getAllCategories();
  }
 isUpdatedBtn:boolean=false;

 catgForm=this.fb.group({
  cid:[],
  cname:['',Validators.required],
  
 });
 // get properties for each control
 get cid(){
  return this.catgForm.get('cid');
 }
 get cname(){
  return this.catgForm.get('cname');
 }


catgList:any=[];

getAllCategories(){
  this.categoryservice.getAllCategories().subscribe(result=>{
    this.catgList=result;
  });
}
edit(category:any){
this.isUpdatedBtn=true;
this.catgForm.setValue({
cid:category.cid,
cname:category.cname,

});
}
delete(id:number){
  let result=confirm('Do you want to delete ?');
  if(result==true){
    this.categoryservice.DeleteCategory(id).subscribe(res=>{
      alert('Record deleted');
    })
  }
  this.getAllCategories();
  this.clearForm();
}
category:any={};
saveCategory()
{
this.category.cname=this.catgForm.value.cname;

if(!this.isUpdatedBtn){
   this.categoryservice.AddCategory(this.category).subscribe(res=>{
    alert('Record inserted');
    this.getAllCategories();
   });
}
else{
  this.category.cid=this.catgForm.value.cid;
  this.categoryservice.UpdateCategory(this.category).subscribe(res=>{
    alert('Record updated');
    this.getAllCategories();
   });
}
this.clearForm();
}

clearForm()
{
  this.catgForm.reset();
  this.isUpdatedBtn=false;
}



}
