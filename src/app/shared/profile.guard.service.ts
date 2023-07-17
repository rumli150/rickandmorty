import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Character, CharLocation } from '../character-list/character.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService implements CanActivate {
  location = new CharLocation('', '')
  character = new Character(1, '', '', '', '', '', this.location, this.location, '', [], '', '')

  constructor(
    private myRoute: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStorageService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    let id = route.params.id
    let promise = new Promise<boolean>((resolve, reject) => {
      this.dataStorage.getCharacter(id).subscribe((character) => {
        this.character = character
      if (this.character.status != 'Alive') {
        alert('Warning: The caracter is dead or unkown')
        this.router.navigate(['/characters'], { queryParamsHandling: 'merge' })
        resolve(false)
      } else {
        resolve(true)
      }
      })
    })

    return promise
  }

}
