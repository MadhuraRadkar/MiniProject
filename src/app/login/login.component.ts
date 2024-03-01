import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  islogin:string='false';

  constructor(private fb:FormBuilder,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  roleId:string|null=null;
  LoginForm=this.fb.group({
    Email:['',Validators.required],
    Password:['',Validators.required]
   
    
  });

  get Email(){
    return this.LoginForm.get('Email');
  }
 get Password(){
   return this.LoginForm.get('Password');
 }

 login:login={};
   SaveLogin(){
      let req={ 
        "Email":this.LoginForm.value.Email, 
        "Password":this.LoginForm.value.Password 
       } 
       
        this.loginservice.Login(req).subscribe(res=>{ 
          if(res!=null){
          // alert('Login Successfully') 
          // console.log(res) 
          this.islogin= "true";
          localStorage.setItem('islogin',this.islogin);
          localStorage.setItem("roleId",res.Object.roleId); 
          localStorage.setItem("email",res.Object.email); 
          localStorage.setItem("token",res.token);
          localStorage.setItem("rid",res.Object.rid);
          alert('Login Successfully') 
          this.roleId=localStorage.getItem('roleId');
            
          if(res.token!=""){
            if(res.Object.roleId == 1){
              this.router.navigate(['/products']);
            }
            else if (res.Object.roleId==2){
              this.router.navigate(['/products']);
            }
             
          }
         
          this.clearForm(); 
          }else{
            alert('Please Check Valid email or password') 
          } 
    });
    
  }

  clearForm()
  {
    this.LoginForm.reset();
  }
}
