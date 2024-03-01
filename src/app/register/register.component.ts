import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { register } from './register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private registerService:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  RegisterForm=this.fb.group({
    Rid:[],
    UserName:['',Validators.required],
    Password:['',Validators.required],
    Email:['',Validators.required],
    PhoneNumber:['',Validators.required],
   // RoleId:['',Validators.required]
   
  });

  get Rid(){
    return this.RegisterForm.get('Rid'); 
 }
 get UserName(){
   return this.RegisterForm.get('UserName');
 }
 get Password(){
   return this.RegisterForm.get('Password');
 }
 get Email(){
  return this.RegisterForm.get('Email');
}
get PhoneNumber(){
  return this.RegisterForm.get('PhoneNumber');
}
//  get RoleId(){
//    return this.RegisterForm.get('RoleId');
//  }

register:register={};
   SaveRegister(){
   //debugger

    this.register.UserName=this.RegisterForm.value.UserName
    this.register.Password=this.RegisterForm.value.Password
    this.register.Email =this.RegisterForm.value.Email
    this.register.PhoneNumber =this.RegisterForm.value.PhoneNumber
  //  this.register.RoleId =this.RegisterForm.value.RoleId
    this.registerService.Register(this.register).subscribe(res=>{
      alert('Register Successfully')
      this.router.navigate(['/Login']);
    
      this.clearForm();
    });
    
  }

  clearForm()
  {
    this.RegisterForm.reset();
  }



}
