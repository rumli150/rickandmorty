import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Character, Location } from 'src/app/character-list/character.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CharacterFilter } from 'src/app/shared/filter.model';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit{
  location = new Location('','')
  character = new Character(1,'','','','','',this.location,this.location,'',[],'','')
  id : number
  filter = new CharacterFilter();

  constructor(
    private dataStorageService: DataStorageService, 
    private router: Router,
    private route : ActivatedRoute
  ) {
    // console.log(this.router.getCurrentNavigation().extras.state.example)
  } 

  ngOnInit(){
    this.id = this.route.snapshot.params.id
    this.dataStorageService.getCharacter(this.id).subscribe((character)=>{
      this.character = character
    })
  }
  onBack(){

    const navigationExtras: NavigationExtras = {
      queryParams: {},
      queryParamsHandling: 'merge',
    }

    this.router.navigate(
      ['/characters'],
      navigationExtras)
  }

}
