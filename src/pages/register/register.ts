import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name=this.name;
  email=this.email;
  password=this.password;
  cpassword=this.cpassword;
  phone=this.phone;
  regi(){
  console.log("your name is    :"+this.name);
  console.log("Email           :"+this.email);
  console.log("Password        :"+this.password);
  console.log("ConformPassword :"+this.cpassword);
  console.log("phone number    :"+this.phone);
  }
}
