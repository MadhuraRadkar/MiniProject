import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MiniProject';
  roleId:any;
  rid:any;
  islogin: boolean = false; // Initially set to false
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.roleId=localStorage.getItem('roleId');
    this.rid=localStorage.getItem('rid');
    this.islogin = localStorage.getItem('islogin') === 'true'; // Convert to boolean
  }
  ngDoCheck(){
    this.roleId=localStorage.getItem('roleId');
    this.rid=localStorage.getItem('rid');
    this.islogin = localStorage.getItem('islogin') === 'true';
  }
  logout() {
    localStorage.clear();
    this.islogin = false;
    this.router.navigate(['/Login']);
  }
    
}
