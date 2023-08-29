import { Component, ViewChild } from '@angular/core';
import { menuComponentService } from './menu.component.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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
  darkMode = false

  constructor(private menuService: menuComponentService,
    private translate: TranslateService,
    private authService : AuthService,
    private router: Router
    ){}

  ngOnInit(){
    if(localStorage.getItem('darkMode') == 'true'){
      this.menuService.darkMode = true
      this.darkMode = true
    }
    if(localStorage.getItem('language') !== undefined){
      // this.switchLanguage(localStorage.getItem('language'))
      let lang = localStorage.getItem('language')
      lang = lang.slice(1,-1)
      console.log(lang)
      this.translate.use(lang)
    }
    this.sub = this.menuService.caretEvent.subscribe(isOpen => {
      this.menuIsOpen = isOpen
    })
    if(this.authService.isLoggedIn){
      this.isLoggedIn = true
    }
    this.subtwo = this.authService.logger.subscribe(state =>{
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
    localStorage.setItem('language',JSON.stringify(language))
  }
  ngOnDestroy(){
    this.sub?.unsubscribe()
    this.subtwo?.unsubscribe()
  }
  onLogOut(){
    this.authService.logger.next(false)
    this.router.navigate(['auth'])
  }
  onChangeStyle(){
    this.menuService.styleChange()
  }
}