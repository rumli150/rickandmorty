import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from "@angular/core/testing"
import { MenuComponent } from "./menu.component"
import { DebugElement } from "@angular/core"
import { async } from "rxjs"
import { HttpClientModule } from "@angular/common/http"
import { MatSlideToggleModule } from "@angular/material/slide-toggle"
import { RouterTestingModule } from "@angular/router/testing"
import { TranslateModule } from "@ngx-translate/core"
// import {routes} from "../app-routing.module"
import { HomeComponent } from "../home/home.component"
import { CharacterListComponent } from "../character-list/character-list.component"
import { CharacterProfileComponent } from "../character-list/character-profile/character-profile.component"
import { AuthComponent } from "../auth/auth.component"
import { EpisodeListComponent } from "../episode-list/episode-list.component"
import { EpisodeProfileComponent } from "../episode-list/episode-profile/episode-profile.component"
import { ErrorPageComponent } from "../error-page/error-page.component"
import { LocationListComponent } from "../location-list/location-list.component"
import { LocationProfileComponent } from "../location-list/location-profile/location-profile.component"
import { Router, Routes } from "@angular/router"
import { Location } from "@angular/common"
import { AuthGuardService } from "../shared/auth.guard.service"
import { ProfileGuardService } from "../shared/profile.guard.service"

describe('MenuComponent', () => {
    let component: MenuComponent
    let fixture: ComponentFixture<MenuComponent>
    let de: DebugElement
    let router: Router
    let location: Location

    const routes: Routes = [
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'characters', component: CharacterListComponent},
        {path: 'characters/:id', component: CharacterProfileComponent},
        {path: 'locations', component: LocationListComponent},
        {path: 'locations/:id', component: LocationProfileComponent},
        {path: 'episodes', component: EpisodeListComponent},
        {path: 'episodes/:id', component: EpisodeProfileComponent},
        {path: 'auth', component: AuthComponent},
        {path: '**', component: ErrorPageComponent},
      ];

    beforeEach(waitForAsync(()=>{
        TestBed.configureTestingModule({
            declarations: [
                MenuComponent,
                HomeComponent,
                CharacterListComponent,
                CharacterProfileComponent,
                LocationListComponent,
                LocationProfileComponent,
                EpisodeListComponent,
                EpisodeProfileComponent,
                AuthComponent,
                ErrorPageComponent 
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                TranslateModule.forRoot(),
                MatSlideToggleModule,
                HttpClientModule,
              ],
        }).compileComponents()
    }))

    beforeEach(() => {
        
        router = TestBed.inject(Router)
        location = TestBed.inject(Location)
        
        fixture = TestBed.createComponent(MenuComponent)
        component = fixture.componentInstance
        de = fixture.debugElement

        router.initialNavigation()

        fixture.detectChanges()
        localStorage.removeItem('darkMode')
    })

    it('shoud exist', () => {
        expect(component).toBeTruthy()
    })
    it('shoud switch between on/off', () => {
        localStorage.setItem('darkMode', 'true')
        component.ngOnInit()
        expect(component.darkMode).toBeTruthy()
    })
    it('shoud use sercice', () => {
        component.ngOnInit()
        component.onChangeStyle()
        expect(component).toBeTruthy()
        component.onChangeStyle()
    })

    it('should navigate to every route', fakeAsync(() => {
        router.navigate([''])
        tick()
        expect(location.path()).toBe('/home')
        router.navigate(['characters'])
        tick()
        expect(location.path()).toBe('/characters')
        router.navigate(['locations'])
        tick()
        expect(location.path()).toBe('/locations')
        router.navigate(['auth'])
        tick()
        expect(location.path()).toBe('/auth')
    }))
    xit('should navigate to error page', fakeAsync(() => {
        router.navigate(['asd'])
        tick()
        expect(location.path()).toBe('/error')
    }))

    xit('should switch darkmode button', fakeAsync(() => {
        spyOn(component, 'onChangeStyle');

	let button = fixture.debugElement.nativeElement.querySelector('MatSlideToggle');
    button.click();

	tick();

	expect(component.onChangeStyle).toHaveBeenCalled();
    }))
    
})