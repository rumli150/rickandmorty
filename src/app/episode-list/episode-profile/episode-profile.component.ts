import { Component } from '@angular/core';
import { Episode } from '../character.model';
import { EpisodeFilter } from 'src/app/shared/filter.model';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-episode-profile',
  templateUrl: './episode-profile.component.html',
  styleUrls: ['./episode-profile.component.css']
})
export class EpisodeProfileComponent {
  episode = new Episode(1,'','','',[],'','')
  id : number
  filter = new EpisodeFilter();
  sub : Subscription
  image = 'https://cdn.icon-icons.com/icons2/1898/PNG/512/planet_121108.png'

  constructor(
    private dataStorageService: DataStorageService, 
    private router: Router,
    private route : ActivatedRoute
  ) {} 

  ngOnInit(){
    this.id = this.route.snapshot.params.id
    this.sub = this.dataStorageService.getEpisode(this.id).subscribe((episode)=>{
      this.episode = episode
    })
  }

  onBack(){

    const navigationExtras: NavigationExtras = {
      queryParams: {},
      queryParamsHandling: 'merge',
    }

    this.router.navigate(
      ['/episodes'],
      navigationExtras)
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
