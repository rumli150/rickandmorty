import { NgModule } from '@angular/core'
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterEpisodeComponent } from './character-profile/character-episode/character-episode.component';
@NgModule({
    imports: [
      SharedModule
    ],
    declarations: [CharacterListComponent, CharacterProfileComponent, CharacterListItemComponent, 
      CharacterEpisodeComponent],
    exports: [CharacterListComponent, CharacterProfileComponent, CharacterListItemComponent, 
      CharacterEpisodeComponent],
    providers : []
  })
  export class CharacterModule {}