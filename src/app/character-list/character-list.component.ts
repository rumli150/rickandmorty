import { Component } from '@angular/core';
import { Character, Location } from '../shared/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  earth = new Location("Earth", "https://rickandmortyapi.com/api/location/1")
  characters : Character[] = [
     new Character(
      1, "Rick Sanchez", "Alive", "Human", "", "Male", this.earth, this.earth, 
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
      ["https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2"], 
      "https://rickandmortyapi.com/api/character/1",
      "2017-11-04T18:48:46.250Z"
      ),
      new Character(
        1, "Hulyegyerek", "Deada", "Human", "", "Male", this.earth, this.earth, 
        "https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png", 
        ["https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"], 
        "https://rickandmortyapi.com/api/character/1",
        "2017-11-04T18:48:46.250Z"
        )
  ]

  onSelectItem(num){
    console.log(num)
  }
}
