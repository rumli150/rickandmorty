import { Component, ViewChild } from '@angular/core';
import { menuComponentService } from './menu.component.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('dropdown') dropdownMenu
  sub : Subscription
  subtwo : Subscription
  menuIsOpen = false
  isLoggedIn = false

  constructor(private menuService: menuComponentService,
    private translate: TranslateService,
    private authService : AuthService){}

  ngOnInit(){
    this.sub = this.menuService.caretEvent.subscribe(isOpen => {
      this.menuIsOpen = isOpen
    })
    this.subtwo =this.authService.logger.subscribe(state =>{
      this.isLoggedIn = state
      if(this.isLoggedIn){
        console.log("Bejelentkezve")
      }else{
        console.log("Nincs bejelentkezve")
      }
    })
  }
  switchLanguage(language: string){
    this.translate.use(language)
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
    this.subtwo.unsubscribe()
  }
}
