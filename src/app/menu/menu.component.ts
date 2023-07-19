import { Component, ViewChild } from '@angular/core';
import { menuComponentService } from './menu.component.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('dropdown') dropdownMenu
  menuIsOpen = false

  constructor(private menuService: menuComponentService,
    private translate: TranslateService){}

  ngOnInit(){
    this.menuService.caretEvent.subscribe(isOpen => {
      this.menuIsOpen = isOpen
    })
  }
  switchLanguage(language: string){
    this.translate.use(language)
  }
}
