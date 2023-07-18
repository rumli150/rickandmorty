import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { EpisodeFilter } from '../shared/filter.model';
import { Info } from '../shared/info.model';
import { Episode } from './character.model';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent {
  @ViewChild('f') myForm: NgForm;
  episodes: Episode[];
  page = 1;
  info = new Info(0, 0, null, null);
  filter = new EpisodeFilter();
  filterError = false
  button = 'Search'

  constructor(
    private dataStorageService : DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
      this.filter.name = params['name'];
      this.filter.episode = params['episode'];
      if (this.page == undefined) {
        this.page = 1;
      }

      this.dataStorageService
        .getEpisodesFromDB(this.page, this.filter)
        .subscribe((episodes) => {
          this.episodes = episodes.results;
          this.info = episodes.info;
          this.filterError = false
          this.button = 'Search'
        },(error) => {
          console.error('Error caught in component')
          console.log(error);
          console.log('Jajj ne')
          this.filterError = true
          this.myForm.reset()
          this.button = 'Retry'
        })
    });
  }
  onSelectItem(episode){
    let myParams: any = {page: this.page}
    console.log(this.filter)
    

    if(this.filter.name){
      myParams = { ...myParams, name : this.filter.name};
    }
    if(this.filter.episode !== 'Not specified'){
      myParams = { ...myParams, episode : this.filter.episode};
    }

    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',
    }
    this.router.navigate(
      ['episodes',episode.id],
      navigationExtras)
  }

  onSearch(){
    let myParams: any = {}
    
    if(this.myForm.value.name){
      myParams = { ...myParams, name : this.myForm.value.name};
    }
    if(this.myForm.value.episode !== 'Not specified'){
      myParams = { ...myParams, episode : this.myForm.value.episode};
    }
    
    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',
    };

    this.router.navigate(
      ['/episodes'],
      navigationExtras)
      console.log(myParams)
  }
  
  onPrev(){
    this.router.navigate(['/episodes'], 
    {queryParams: { page : + this.page-1}, queryParamsHandling: 'merge'})
  }
  onNext(){
    this.router.navigate(['/episodes'], 
    {queryParams: { page : + this.page+1}, queryParamsHandling: 'merge'})
  }
}
