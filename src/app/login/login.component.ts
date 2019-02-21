import { Component, OnInit } from '@angular/core';
import{Router}  from '@angular/router';
import { LoginService } from '../login.service';
// import {LoginService} from  '../login.service'
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
d:any=[];
public nuser=[];
  constructor(private router:Router,private logins:LoginService) { }

  ngOnInit() {
    //for(var key in localStorage)
    //this.d.push(localStorage.getItem(key));
   
    // this.logins.getUser()
    // .subscribe(data=>this.nuser=data); 
    // console.log(this.nuser);
    
  }

  keys=Object.keys(localStorage);
  public usery=[];
  j:any;
  c:boolean=true;
  loginuser(e){
    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username,password);
 
  if((username=="admin" && password=="admin")){
      this.logins.setUserLoggedin();
      this.router.navigate(['home']);
    }

  }
}