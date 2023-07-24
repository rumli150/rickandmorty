import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';
import { menuComponentService } from './menu/menu.component.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkMode = false
  sub : Subscription
  constructor(private translate: TranslateService,
    private authService : AuthService,
    private menuService : menuComponentService
    ){
    this.translate.setDefaultLang('en')
  }
  switchLanguage(language: string){
    this.translate.use(language)
  }

  ngOnInit(){
    this.darkMode = this.menuService.dinamicModeChange(this.darkMode)
    this.menuService.darkModeSwitch.subscribe(dark => {
      this.darkMode = dark
    })

    const user = localStorage.getItem('userData')
    if(user){
      console.log('Van User!')
      this.authService.logger.next(true)
      this.authService.isLoggedIn = true
    }
    console.log("Bejelentkezve: "+ this.authService.isLoggedIn)
  }

}
