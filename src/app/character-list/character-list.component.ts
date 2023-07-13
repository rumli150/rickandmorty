import { Component, OnInit } from '@angular/core';
import { Character, Info, Location } from '../shared/character.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters : Character[]
  page = 1
  info = new Info(0,0,null,null)
  constructor(
    private dataStorageService : DataStorageService,
    private route : ActivatedRoute
    ){}

  ngOnInit(){
    this.route.queryParams.subscribe((params : Params)=>{
      this.page = params['page']
      // console.log(params)
      // console.log(this.route)
      console.log(this.page)

    this.dataStorageService.getCharactersFromDB(this.page).subscribe((characters) => {
      console.log(characters)
      this.characters = characters.results
      this.info = characters.info
    })
    })
    
  }

  onSelectItem(char){
    console.log(char)
  }
}
