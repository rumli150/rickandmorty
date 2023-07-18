import { Component, Input } from '@angular/core';
import { Episode } from '../character.model';

@Component({
  selector: 'app-episode-list-item',
  templateUrl: './episode-list-item.component.html',
  styleUrls: ['./episode-list-item.component.css']
})
export class EpisodeListItemComponent {
   @Input() episode = new Episode(1,'','','',[],'','')
}
