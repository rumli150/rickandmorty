import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menuComponentService } from './menu/menu.component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorPageModule } from './error-page/error-page.module';
import { AuthenticationModule } from './auth/auth.module';
import { MainModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { EpisodeModule } from './episode-list/episode.module';
import { LocationModule } from './location-list/location.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ErrorPageModule,
    MainModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    EpisodeModule,
    LocationModule,
    AppRoutingModule
  ],
  providers: [menuComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
