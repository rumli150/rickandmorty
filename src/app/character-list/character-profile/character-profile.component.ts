import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character, CharacterList, CharLocation } from 'src/app/character-list/character.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { CharacterFilter } from 'src/app/shared/filter.model';
import { NavigationService } from 'src/app/shared/navigation.service';

@Component({
  selector: 'app-character-profile',
  templateUrl: './character-profile.component.html',
  styleUrls: ['./character-profile.component.css']
})
export class CharacterProfileComponent implements OnInit{
  location = new CharLocation('','')
  character = new Character(1,'','','','','',this.location,this.location,'',[],'','')
  id : number
  filter = new CharacterFilter();
  sub : Subscription

  constructor(
    private dataStorageService: DataStorageService, 
    private router: Router,
    private route : ActivatedRoute,
    private navigation : NavigationService
  ) {
    // console.log(this.router.getCurrentNavigation().extras.state.example)
  } 

  ngOnInit(){
    this.id = this.route.snapshot.params.id
    this.sub = this.dataStorageService.getCharacter(this.id).subscribe((character)=>{
      this.character = character
    })
  }
  onBack(){

    const navigationExtras: NavigationExtras = {
      queryParams: {},
      queryParamsHandling: 'merge',
    }

    // this.router.navigate(
    //   ['/characters'],
    //   navigationExtras)
    this.navigation.back()
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
