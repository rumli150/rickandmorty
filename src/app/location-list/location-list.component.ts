import { Component, ViewChild } from '@angular/core';
import { Info } from '../shared/info.model';
import { Location } from './location.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { LocationFilter } from '../shared/filter.model';
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  locations: Location[];
  page = 1;
  info = new Info(0, 0, null, null);
  filter = new LocationFilter();
  filterError = false
  button = 'Search'

  myForm : FormGroup

  constructor(
    private dataStorageService : DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.myForm = new FormGroup({
      'name' : new FormControl(null),
      'type' : new FormControl(null),
      'dimension' : new FormControl(null)
    })


    this.route.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
      this.filter.name = params['name'];
      this.filter.type = params['type'];
      this.filter.dimension = params['dimension'];
      if (this.page == undefined) {
        this.page = 1;
      }

      this.dataStorageService
        .getLocationsFromDB(this.page, this.filter)
        .subscribe((characters) => {
          this.locations = characters.results;
          this.info = characters.info;
          this.filterError = false
          this.button = 'Search'
        },(error) => {
          console.error('Error caught in component')
          console.log(error);
          console.log('Jajj ne')
          this.filterError = true
          this.button = 'Retry'
        })
    });
    this.myForm.valueChanges.subscribe(()=>{
      this.onSearch()
    })
  }
  onSelectItem(location){
    let myParams: any = {page: this.page}
    console.log(this.filter)
    

    if(this.filter.name){
      myParams = { ...myParams, name : this.filter.name};
    }
    if(this.filter.type){
      myParams = { ...myParams, type : this.filter.type};
    }
    if(this.filter.dimension){
      myParams = { ...myParams, dimension : this.filter.dimension};
    }

    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',
    }
    this.router.navigate(
      ['locations',location.id],
      navigationExtras)
  }

  onSearch(){
    let myParams: any = {}
    
    if(this.myForm.value.name){
      myParams = { ...myParams, name : this.myForm.value.name};
    }
    if(this.myForm.value.type){
      myParams = { ...myParams, type : this.myForm.value.type};
    }
    if(this.myForm.value.dimension){
      myParams = { ...myParams, dimension : this.myForm.value.dimension};
    }
    
    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',
    };

    this.router.navigate(
      ['/locations'],
      navigationExtras)
      console.log(myParams)
  }
  
  onPrev(){
    this.router.navigate(['/locations'], 
    {queryParams: { page : + this.page-1}, queryParamsHandling: 'merge'})
  }
  onNext(){
    this.router.navigate(['/locations'], 
    {queryParams: { page : + this.page+1}, queryParamsHandling: 'merge'})
  }
}
