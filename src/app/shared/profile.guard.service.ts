import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Character, Location } from './character.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService implements CanActivate {
  location = new Location('','')
  character = new Character(1,'','','','','',this.location,this.location,'',[],'','')

  constructor(
    private myRoute: ActivatedRoute,
    private router: Router,
    private dataStorage: DataStorageService
    ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.router.url.toString().includes('/characters')){
      let id = route.params.id
      this.dataStorage.getCharacter(id).subscribe((character)=>{
        this.character = character
        if(this.character.status != 'Alive'){
        alert('Warning: The caracter is dead or unkown')
        this.router.navigate(['/characters'], {queryParamsHandling : 'merge'})
        return false
      }
      })
    }else{
      alert('nem lehet!')
      return false
    }
    
  }

}
