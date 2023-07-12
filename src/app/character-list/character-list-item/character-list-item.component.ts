import { Component, Input } from '@angular/core';
import { Character } from 'src/app/shared/character.model';

@Component({
  selector: 'app-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: ['./character-list-item.component.css']
})
export class CharacterListItemComponent {
  @Input() character : Character
}
