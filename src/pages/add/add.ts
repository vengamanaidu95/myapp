import { Component } from '@angular/core';
import { PlacesServices } from '../services/services';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  constructor(private PlacesServices:PlacesServices) {
  }
  onAddPlace(value:{title:string}){ 
  this.PlacesServices.addPlace(value);
  }

}
