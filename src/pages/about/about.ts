import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlgebraPage } from '../algebra/algebra';
import { AssociativePage } from '../associative/associative';
import { AbsolutePage } from '../absolute/absolute';
import { AdditionPage } from '../addition/addition';
import { PermutationsPage } from '../permutations/permutations';
import { CombinationsPage } from '../combinations/combinations';
import { GooglemapsPage } from '../googlemaps/googlemaps';
import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }
  alge(){
    this.navCtrl.push(AlgebraPage);
  }
  asso(){
    this.navCtrl.push(AssociativePage);
  }
  abso(){
    this.navCtrl.push(AbsolutePage);
  }
  addi(){
     this.navCtrl.push(AdditionPage);
  }
  perm(){
    this.navCtrl.push(PermutationsPage);
  }
  comb(){
    this.navCtrl.push(CombinationsPage);
  }
  google(){
    this.navCtrl.push(GooglemapsPage);
  }
  maps(){
    this.navCtrl.push(MapsPage);
  }
}
