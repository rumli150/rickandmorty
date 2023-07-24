import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService,
    private authService : AuthService
    ){
    this.translate.setDefaultLang('en')
  }
  switchLanguage(language: string){
    this.translate.use(language)
  }

  ngOnInit(){
    const user = localStorage.getItem('userData')
    if(user){
      console.log('Van User!')
      this.authService.logger.next(true)
      this.authService.isLoggedIn = true
    }
    console.log("Bejelentkezve: "+ this.authService.isLoggedIn)
  }

}
