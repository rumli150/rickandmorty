import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Character, CharacterList, Info, Location } from '../shared/character.model';
import { Filter } from './filter.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient) { }

  earth = new Location("Earth", "https://rickandmortyapi.com/api/location/1")
  characters : Character[] = []

  getCharacters(){
    return this.characters.slice()
  }
  getCharactersFromDB(page : number, filter : Filter){
    let myParams = new HttpParams()
    myParams = myParams.append('page',page)
    if(filter.name){
      myParams = myParams.append('name',filter.name)
    }
    if(filter.status && filter.status !== 'Not specified'){
      myParams = myParams.append('status',filter.status)
    }
    if(filter.species){
      myParams = myParams.append('species',filter.species)
    }
    if(filter.type){
      myParams = myParams.append('type',filter.type)
    }
    if(filter.gender && filter.gender !== 'Not specified'){
      myParams = myParams.append('gender',filter.gender)
    }
    
    return this.http.get<CharacterList>('https://rickandmortyapi.com/api/character',
    {params: myParams}
    )
  }
  getCharacter(id : number){
    return this.http.get<Character>('https://rickandmortyapi.com/api/character/'+id)
  }
}
