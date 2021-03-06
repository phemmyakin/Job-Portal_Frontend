import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { RegistratonComponent } from './components/registraton/registraton.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'
import { from } from 'rxjs';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegistratonComponent,
    LoginComponent,
    ProfileComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
