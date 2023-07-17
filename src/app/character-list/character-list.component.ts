import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Character,  CharLocation } from './character.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { CharacterFilter } from '../shared/filter.model';
import { NgForm } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Info } from '../shared/info.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  @ViewChild('f') myForm: NgForm;
  characters: Character[];
  filter = new CharacterFilter();
  page = 1;
  info = new Info(0, 0, null, null);
  constructor(
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}  

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
      this.filter.name = params['name'];
      this.filter.status = params['status'];
      this.filter.species = params['species'];
      this.filter.type = params['type'];
      this.filter.gender = params['gender'];
      console.log(this.filter);
      console.log(this.page);
      if (this.page == undefined) {
        this.page = 1;
      }

      this.dataStorageService
        .getCharactersFromDB(this.page, this.filter)
        .subscribe((characters) => {
          // console.log(characters)
          this.characters = characters.results;
          this.info = characters.info;
          console.log(params);
        });
    });
  }

  onSelectItem(char) {
    // this.router.navigate(['characters',char.id], {queryParams: {name : 'rick'} , state: { example: 'bar' } })
    let myParams: any = {page: this.page}
    console.log(this.filter)
    

    if(this.filter.name){
      myParams = { ...myParams, name : this.filter.name};
    }
    if(this.filter.status !== 'Not specified'){
      myParams = { ...myParams, status : this.filter.status};
    }
    if(this.filter.species){
      myParams = { ...myParams, species : this.filter.species};
    }
    if(this.filter.type){
      myParams = { ...myParams, type : this.filter.type};
    }
    if(this.filter.gender !== 'Not specified'){
      myParams = { ...myParams, gender : this.filter.gender};
    }

    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',
    }
    this.router.navigate(
      ['characters',char.id],
      navigationExtras)
  }

  onSearch() {
    let myParams: any = {}
    
    if(this.myForm.value.name){
      myParams = { ...myParams, name : this.myForm.value.name};
    }
    if(this.myForm.value.status !== 'Not specified'){
      myParams = { ...myParams, status : this.myForm.value.status};
    }
    if(this.myForm.value.species){
      myParams = { ...myParams, species : this.myForm.value.species};
    }
    if(this.myForm.value.type){
      myParams = { ...myParams, type : this.myForm.value.type};
    }
    if(this.myForm.value.gender !== 'Not specified'){
      myParams = { ...myParams, gender : this.myForm.value.gender};
    }
    
    const navigationExtras: NavigationExtras = {
      queryParams: myParams,
      // queryParamsHandling: 'merge',


    };

    this.router.navigate(
      ['/characters'],
      navigationExtras)
      console.log(myParams)
    }
    onPrev(){
      this.router.navigate(['/characters'], 
      {queryParams: { page : + this.page-1}, queryParamsHandling: 'merge'})
    }
    onNext(){
      this.router.navigate(['/characters'], 
      {queryParams: { page : + this.page+1}, queryParamsHandling: 'merge'})
    }
  }
  