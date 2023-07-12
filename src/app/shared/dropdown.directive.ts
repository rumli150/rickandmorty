import { Directive, ElementRef, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { Subject } from "rxjs";
import { menuComponentService } from "../menu/menu.component.service";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private elRef: ElementRef,
                private menuService: menuComponentService){}

    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      // console.log(this.isOpen)
      this.menuService.caretEvent.next(this.isOpen)
    }
  }