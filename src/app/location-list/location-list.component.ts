import { Component, ViewChild } from '@angular/core';
import { Info } from '../shared/info.model';
import { Location } from './location.model';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocationFilter } from '../shared/filter.model';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  @ViewChild('f') myForm: NgForm;
  locations: Location[];
  page = 1;
  info = new Info(0, 0, null, null);
  filter = new LocationFilter();

  constructor(
    private dataStorageService : DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
      this.filter.name = params['name'];
      this.filter.type = params['type'];
      this.filter.dimension = params['dimension'];
      // console.log(this.filter);
      // console.log(this.page);
      if (this.page == undefined) {
        this.page = 1;
      }

      this.dataStorageService
        .getLocationsFromDB(this.page, this.filter)
        .subscribe((characters) => {
          this.locations = characters.results;
          this.info = characters.info;
        });
    });
  }
  onSelectItem(location){
    console.log(location)
  }

  onSearch(){}
  
  onPrev(){
    this.router.navigate(['/locations'], 
    {queryParams: { page : + this.page-1}, queryParamsHandling: 'merge'})
  }
  onNext(){
    this.router.navigate(['/locations'], 
    {queryParams: { page : + this.page+1}, queryParamsHandling: 'merge'})
  }
}
