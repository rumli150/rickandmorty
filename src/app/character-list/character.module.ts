import { NgModule } from '@angular/core'
import { CharacterListItemComponent } from './character-list-item/character-list-item.component';
import { CharacterListComponent } from './character-list.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterEpisodeComponent } from './character-profile/character-episode/character-episode.component';
import { CharacterRoutingModule } from './character-routing.module';
@NgModule({
    imports: [
      SharedModule,
      CharacterRoutingModule
    ],
    declarations: [CharacterListComponent, CharacterProfileComponent, CharacterListItemComponent, 
      CharacterEpisodeComponent,
    ],
    exports: [CharacterListComponent, CharacterProfileComponent, CharacterListItemComponent, 
      CharacterEpisodeComponent],
    providers : []
  })
  export class CharacterModule {}