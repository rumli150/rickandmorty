import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Episode } from 'src/app/episode-list/character.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-character-episode',
  templateUrl: './character-episode.component.html',
  styleUrls: ['./character-episode.component.css']
})
export class CharacterEpisodeComponent {
  @Input() episode: Episode;
  @Input() indexStr: string;
  charIndex: number;
  name = 'ASDÉGR'
  sub : Subscription

  constructor(
    private dataStorageService: DataStorageService,
    private router : Router
  ) {}

  ngOnInit() {
    let indexList = this.indexStr.split('/');
    this.charIndex = +indexList[indexList.length - 1];
    this.sub = this.dataStorageService.getEpisode(this.charIndex).subscribe(episode =>{
      this.name = episode.episode
    })
    
  }
  onOpenResident() {
    this.sub.unsubscribe()
    this.sub = this.dataStorageService.getEpisode(this.charIndex).subscribe(episode =>{
      this.name = episode.episode
      this.router.navigate(['/episodes',this.charIndex])
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
