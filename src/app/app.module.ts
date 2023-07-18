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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterProfileComponent } from './character-list/character-profile/character-profile.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list/location-list-item/location-list-item.component';
import { LocationProfileComponent } from './location-list/location-profile/location-profile.component';
import { ResidentComponent } from './location-list/location-profile/resident/resident.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeListItemComponent } from './episode-list/episode-list-item/episode-list-item.component';
import { EpisodeProfileComponent } from './episode-list/episode-profile/episode-profile.component';
import { CharacterEpisodeComponent } from './character-list/character-profile/character-episode/character-episode.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    DropdownDirective,
    ErrorPageComponent,
    ShortenPipe,
    CharacterProfileComponent,
    LocationListComponent,
    LocationListItemComponent,
    LocationProfileComponent,
    ResidentComponent,
    EpisodeListComponent,
    EpisodeListItemComponent,
    EpisodeProfileComponent,
    CharacterEpisodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [menuComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
