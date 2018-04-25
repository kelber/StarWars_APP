import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:name', component: PeopleDetailComponent },
  { path: 'planets', component: PlanetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
