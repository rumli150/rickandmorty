import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CharacterListItemComponent } from './character-list/character-list-item/character-list-item.component';
import { CharacterProfileComponent } from './character-list/character-profile/character-profile.component';
import { ProfileGuardService } from './shared/profile.guard.service';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationProfileComponent } from './location-list/location-profile/location-profile.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeListItemComponent } from './episode-list/episode-list-item/episode-list-item.component';
import { EpisodeProfileComponent } from './episode-list/episode-profile/episode-profile.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: 'characters/:id', component: CharacterProfileComponent, canActivate: [ProfileGuardService]},
  {path: 'locations', component: LocationListComponent},
  {path: 'locations/:id', component: LocationProfileComponent},
  {path: 'episodes', component: EpisodeListComponent},
  {path: 'episodes/:id', component: EpisodeProfileComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
