import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/shared/character.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit{
  character = new Character(1,'','','','','',null,null,'',null,'','')
  id : number

  constructor(
    private dataStorageService: DataStorageService, 
    private router: Router,
    private route : ActivatedRoute
  ) {} 

  ngOnInit(){
    this.id = this.route.snapshot.params.id
    this.dataStorageService.getCharacter(this.id).subscribe((character)=>{
      this.character = character
    })
  }

}
