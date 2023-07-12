import { Component, ViewChild } from '@angular/core';
import { menuComponentService } from './menu.component.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('dropdown') dropdownMenu
  menuIsOpen = false

  constructor(private menuService: menuComponentService){}

  ngOnInit(){
    this.menuService.caretEvent.subscribe(isOpen => {
      this.menuIsOpen = isOpen
    })
  }

  onOpen(evt){
    // console.log(this.dropdownMenu.nativeElement.className)
    // this.lastState = this.dropdownMenu.nativeElement.className
    // if(this.lastState == 'dropdown open'){
    //   this.menuIsOpen = false
    // }else{
    //   this.menuIsOpen = true
    // }
    // console.log("Menu is open: ",this.menuIsOpen)
  }
}
