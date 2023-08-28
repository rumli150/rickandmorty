import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {routes} from '../app-routing.module'
import {Location} from "@angular/common"
import { DebugElement, createComponent } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { of } from 'rxjs';
import { CharLocation, Character } from './character.model';

describe("CharacterList", () => {
    let testingController : HttpTestingController
    let location: Location
    let homeFixture: ComponentFixture<CharacterListComponent>
    let service: DataStorageService
    let spy: jasmine.Spy
    let component: CharacterListComponent
    let de: DebugElement

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [CharacterListComponent],
            providers: [DataStorageService]
        }).compileComponents()
    }))
    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, TranslateModule.forRoot(), MatSlideToggleModule, HttpClientTestingModule, FormsModule],
        declarations: [AppComponent, MenuComponent, CharacterListComponent],
      })
      testingController = TestBed.inject(HttpTestingController)
      location = TestBed.inject(Location)
      homeFixture = TestBed.createComponent(CharacterListComponent)
      component = homeFixture.componentInstance
      de = homeFixture.debugElement
      service = de.injector.get(DataStorageService)
      spy = spyOn(service, 'getCharacter').and.returnValue(of(new Character(1, 'Rick', 'Alive', 'Human', '', 'Male', new CharLocation('Earth', 'idk'), new CharLocation('Earth', 'idk'),'idk', [], 'idk', 'now')))
      homeFixture.detectChanges()
    });


    it("should create component", () => {
        expect(component).toBeTruthy()
    })
    it("should have a page var, that = 1", () => {
        expect(component.page).toBe(1)
    })
    it('page = 1 after ngOnInit if it was undefined', () => {
        component.page = undefined
        component.ngOnInit()
        expect(component.page).toBe(1)
    })
    xit('button should stay on search', waitForAsync(() => {
        component.button = 'test'
        component.ngOnInit()
        homeFixture.autoDetectChanges()
        expect(component.button).toBe('Search')

    }))
    xit('page increeses', waitForAsync(() => {
        component.onNext()
        tick(600)
        expect(component.page).toBe(2)
    }))
    // it("should navigate /characters path", waitForAsync (() => {
    //     const fixture = TestBed.createComponent(CharacterListComponent);
    //     fixture.detectChanges()
    //     fixture.whenStable().then(() => {
    //         const app = fixture.componentInstance;
    //         app.onNext()
    //         expect(location.path()).toBe('/characters')
    //     })
    // }))
    // it("should have a page var, that increases", () => {
    //     let route : ActivatedRoute
    //     let router : Router
    //     const app = new CharacterListComponent(null,route,router);
    //     app.onNext()
    //     app.ngOnInit()
    //     expect(app.page).toBe(2)
    // })
})