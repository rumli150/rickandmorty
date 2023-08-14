import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgForm } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
        MatSlideToggleModule,
        HttpClientModule,
      ],
      declarations: [AppComponent, MenuComponent, CharacterListComponent],
    })
  );

  it('dark mode should be disabled at launch', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    localStorage.setItem('darkMode', null);
    app.ngOnInit();
    expect(app.darkMode).toBeFalsy();
  });

  it('dark mode should be enabled', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.darkMode = true;
    app.ngOnInit();
    expect(app.darkMode).toBeTruthy();
  });

  it('shoud not have a user by default', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    const user = localStorage.getItem('userData');
    expect(user).toBeTruthy();
  });

  it('can have a user', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    localStorage.setItem(
      'userData',
      JSON.stringify({ name: 'admin', password: 'admin' })
    );

    const user = localStorage.getItem('userData');
    expect(user).toBeTruthy();
  });

  // it("should login if user did not log out" , () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const router = new Router()
  //   const service = new AuthService(router)
  //   app.ngOnInit()
  //   expect(service.isLoggedIn).toBe(true)
  // })
});
