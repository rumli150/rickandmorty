import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Character, Info, Location } from '../shared/character.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Filter } from '../shared/filter.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  @ViewChild('f') myForm: NgForm;
  characters: Character[];
  filter = new Filter();
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
    console.log(char);
  }

  onSearch() {
    // this.filter.name = this.myForm.value.name
    // this.filter.status = this.myForm.value.status
    // this.filter.species = this.myForm.value.species
    // this.filter.type = this.myForm.value.type
    // this.filter.gender = this.myForm.value.gender
    // console.log(this.filter)
    // console.log(this.page)
    // this.dataStorageService.getCharactersFromDB(this.page, this.filter).subscribe((characters) => {
    //   // console.log(characters)
    //   this.characters = characters.results
    //   this.info = characters.info
    // })
    // this.router.navigate(['characters', 1])
    
  }
}
