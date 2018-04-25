import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { PlanetsComponent } from './planets/planets.component';

// Services
import { PeopleService } from './shared/people.service';
import { PlanetsService } from './shared/planets.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeopleComponent,
    PeopleDetailComponent,
    PlanetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ PeopleService, PlanetsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
