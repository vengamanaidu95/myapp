import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';


@Component({
  selector: 'page-combinations',
  templateUrl: 'combinations.html',
})
export class CombinationsPage {
 row=this.row;
 col=this.col;
  constructor(public navCtrl: NavController) {
  }
matrix(){
var i:number=1;
var t:number=1;
var row:number=this.row;
var col:number=this.col;
for(i=1;i<=row;i++){
  for(t=1;t<=col;t++){
      console.log("count");
  }
}
}
}
