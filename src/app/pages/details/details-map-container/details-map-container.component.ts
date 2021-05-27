import { Component, OnInit } from '@angular/core';
import {
  MapsAPILoader
} from '@agm/core';

@Component({
  selector: 'app-details-map-container',
  templateUrl: './details-map-container.component.html',
  styleUrls: ['./details-map-container.component.scss']
})
export class DetailsMapContainerComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom=15;
  

  

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
