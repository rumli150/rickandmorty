import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListItemComponent } from './character-list/character-list-item/character-list-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { menuComponentService } from './menu/menu.component.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShortenPipe } from './shorten.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    DropdownDirective,
    ErrorPageComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [menuComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
