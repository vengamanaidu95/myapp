import {NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AddPage } from '../add/add';
import { PlacesServices } from '../services/services';
@Component({
  selector: 'page-googlemaps',
  templateUrl: 'googlemaps.html',
})
export class GooglemapsPage {
  places:{title:string}[]=[];
  constructor(public navCtrl: NavController,private placesServices:PlacesServices)   {
  }
  ionViewWillEnter(){
   this.places=this.placesServices.getPlaces();
  }
  addMarker(){
   this.navCtrl.push(AddPage);
  }
}