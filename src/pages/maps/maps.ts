import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
                        longitude=this.longitude;
                        latitude=this.latitude;
                        
                        submit(){
                         this.ionViewDidLoad();
                        }
                        @ViewChild('map') mapElement;
                        map:any;
                        constructor(public navCtrl: NavController) {
                                                                   }

                        ionViewDidLoad(){
                                      this.loadMap();
                                      }
                                    
                        loadMap(){
                                let latlng=new google.maps.LatLng(this.latitude,this.longitude);
                                let mapOptions={
                                               center:latlng,
                                               zoom:11,
                                               mapTypeId:google.maps.MapTypeId.HYBRID
                                                };
                                this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions);
                        }
}

                          