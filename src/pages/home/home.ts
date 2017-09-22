import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslatePage } from '../translate/translate';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname=this.uname;
  password=this.password;
  constructor(public navCtrl: NavController) {
 }
  funct(){
   this.navCtrl.push(TranslatePage);
  }
  regi(){
   this.navCtrl.push(RegisterPage);
  }
  login(){
    console.log("user name     :"+this.uname);
    console.log("user password :"+this.password);
  }
 
}
