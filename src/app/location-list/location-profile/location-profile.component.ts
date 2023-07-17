import { Component } from '@angular/core';
import { Location } from '../location.model';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { LocationFilter } from 'src/app/shared/filter.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.css']
})
export class LocationProfileComponent {
  location = new Location(1,'','','',[],'','')
  id : number
  filter = new LocationFilter();
  sub : Subscription
  image = 'https://cdn.icon-icons.com/icons2/1898/PNG/512/planet_121108.png'

  constructor(
    private dataStorageService: DataStorageService, 
    private router: Router,
    private route : ActivatedRoute
  ) {} 

  ngOnInit(){
    this.id = this.route.snapshot.params.id
    this.sub = this.dataStorageService.getLocation(this.id).subscribe((location)=>{
      this.location = location
      if(location.type == 'Cluster'){
        this.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Galaxy_symbol_%28bold%29.svg/2048px-Galaxy_symbol_%28bold%29.svg.png'
      }else if(location.type == 'Space station'){
        this.image = 'https://icon-library.com/images/spaceship-icon/spaceship-icon-13.jpg'
      }else if(location.type == 'TV'){
        this.image = 'https://icons-for-free.com/iconfiles/png/512/television+tv+icon-1320086462225673727.png'
      }
    })
  }

  onBack(){

    const navigationExtras: NavigationExtras = {
      queryParams: {},
      queryParamsHandling: 'merge',
    }

    this.router.navigate(
      ['/locations'],
      navigationExtras)
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
}
