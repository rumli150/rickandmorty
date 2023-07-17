import { Component, Input } from '@angular/core';
import { Location } from '../location.model';

@Component({
  selector: 'app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.css']
})
export class LocationListItemComponent {
  @Input() location = new Location(1,'','','',[],'','')
}
