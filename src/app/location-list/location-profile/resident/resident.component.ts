import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/character-list/character.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css'],
})
export class ResidentComponent {
  @Input() character: Character;
  @Input() indexStr: string;
  charIndex: number;
  image = 'https://cdn.icon-icons.com/icons2/1898/PNG/512/planet_121108.png'
  sub : Subscription

  constructor(
    private dataStorageService: DataStorageService,
    private router : Router
  ) {}

  ngOnInit() {
    let indexList = this.indexStr.split('/');
    this.charIndex = +indexList[indexList.length - 1];
    this.sub = this.dataStorageService.getCharacter(this.charIndex).subscribe(character =>{
      this.image = character.image
    })
    
  }
  onOpenResident() {
    this.sub.unsubscribe()
    this.sub = this.dataStorageService.getCharacter(this.charIndex).subscribe(character =>{
      this.image = character.image
      if(character.status == 'Alive'){
        this.router.navigate(['/characters',this.charIndex])
      }else{
        alert('Character is dead, or unkown')
      }
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
