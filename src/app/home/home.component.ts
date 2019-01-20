import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data="hi";

  change(){
    this.data="Hello";
  }

n="";
p="";
  SignUp(name:string,pass:string){
this.n=name;
this.p=pass;
  }
c:number;
  addi(one,two){
    this.c=Number(one)+Number(two);
  }

  minus(one,two){
    this.c=Number(one)-Number(two);
  }

 multi(one,two){
    this.c=Number(one)*Number(two);
  }

  divide(one,two){
    this.c=Number(one)/Number(two);
  }
  constructor() { }

  ngOnInit() {
  }

}
