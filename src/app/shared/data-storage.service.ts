import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Character, CharacterList, Info, Location } from '../shared/character.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient) { }

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
        1, "Morty", "Unknown", "Human", "", "Male", this.earth, this.earth, 
        "https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png", 
        ["https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2"], 
        "https://rickandmortyapi.com/api/character/1",
        "2017-11-04T18:48:46.250Z"
        )
  ]

  getCharacters(){
    return this.characters.slice()
  }

  getCharactersFromDB(page : number){
    return this.http.get<CharacterList>('https://rickandmortyapi.com/api/character',
    {params: new HttpParams().set('page',page)}
    )
  }
}
