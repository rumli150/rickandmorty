import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuardService } from '../shared/auth.guard.service'
import { ProfileGuardService } from '../shared/profile.guard.service'
import { CharacterListComponent } from './character-list.component'
import { CharacterProfileComponent } from './character-profile/character-profile.component'

const routes: Routes = [
    {path: 'characters', component: CharacterListComponent, canActivate: [AuthGuardService]},
  {path: 'characters/:id', component: CharacterProfileComponent, canActivate: [ProfileGuardService]},
]
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CharacterRoutingModule {}