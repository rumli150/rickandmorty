import { Component, Input } from '@angular/core';
import { Character } from 'src/app/character-list/character.model';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html',
  styleUrls: ['./resident.component.css'],
})
export class ResidentComponent {
  @Input() character: Character;
  @Input() indexStr : string;
  charIndex : number

  constructor(){
    
  }

  ngOnInit() {
    let indexList = this.indexStr.split('/')
    this.charIndex = + indexList[indexList.length-1]
    console.log(this.charIndex)


  }
}
