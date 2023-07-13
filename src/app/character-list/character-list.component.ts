import { Component, OnInit } from '@angular/core';
import { Character, Info, Location } from '../shared/character.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Filter } from '../shared/filter.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters : Character[]
  filter = new Filter()
  page = 1
  info = new Info(0,0,null,null)
  constructor(
    private dataStorageService : DataStorageService,
    private route : ActivatedRoute
    ){}

  ngOnInit(){
    this.route.queryParams.subscribe((params : Params)=>{
      this.page = params['page']
      this.filter.name = params['name']
      this.filter.status = params['status']
      this.filter.species = params['species']
      this.filter.type = params['type']
      this.filter.gender = params['gender']
      console.log(this.filter)
      console.log(this.page)
      if(this.page==undefined){
        this.page = 1
      }

    this.dataStorageService.getCharactersFromDB(this.page, this.filter).subscribe((characters) => {
      // console.log(characters)
      this.characters = characters.results
      this.info = characters.info
      console.log(params)
    })
    })
    
  }

  onSelectItem(char){
    console.log(char)
  }

  onSearch(){

  }
}
