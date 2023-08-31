import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationProfileComponent } from './location-list/location-profile/location-profile.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeProfileComponent } from './episode-list/episode-profile/episode-profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './shared/auth.guard.service';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'characters', loadChildren: () => import('./character-list/character.module').then(m => m.CharacterModule)},
  {path: 'locations', component: LocationListComponent, canActivate: [AuthGuardService]},
  {path: 'locations/:id', component: LocationProfileComponent, canActivate: [AuthGuardService]},
  {path: 'episodes', component: EpisodeListComponent, canActivate: [AuthGuardService]},
  {path: 'episodes/:id', component: EpisodeProfileComponent, canActivate: [AuthGuardService]},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
