import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module';
import { EpisodeListItemComponent } from './episode-list-item/episode-list-item.component';
import { EpisodeListComponent } from './episode-list.component';
import { EpisodeProfileComponent } from './episode-profile/episode-profile.component';
import { ResidentComponent } from '../location-list/location-profile/resident/resident.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
      SharedModule,
      ResidentComponent,
      RouterModule
    ],
    declarations: [
        EpisodeListComponent,
        EpisodeListItemComponent,
        EpisodeProfileComponent,
    ],
    exports: [
        EpisodeListComponent,
        EpisodeListItemComponent,
        EpisodeProfileComponent,
    ],
    providers : []
  })
  export class EpisodeModule {}