import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class menuComponentService {
  darkMode = false
  caretEvent = new Subject<boolean>()
  darkModeSwitch = new Subject<boolean>()

  constructor() {}
  styleChange(){
    this.darkMode = !this.darkMode
    console.log(this.darkMode)
    localStorage.setItem('darkMode',JSON.stringify(this.darkMode))
    this.darkModeSwitch.next(this.darkMode)
  }

  dinamicModeChange(darkMode){
    if(localStorage.getItem('darkMode') == 'true'){
      darkMode = true
    }
    return darkMode
  }
}
