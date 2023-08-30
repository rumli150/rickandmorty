import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationListComponent } from './location-list.component';
import { LocationProfileComponent } from './location-profile/location-profile.component';
@NgModule({
    imports: [
      SharedModule
    ],
    declarations: [
        LocationListComponent,
    LocationListItemComponent,
    LocationProfileComponent,
    ],
    exports: [
        LocationListComponent,
    LocationListItemComponent,
    LocationProfileComponent,
    ],
    providers : []
  })
  export class LocationModule {}