import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './../shared/planets.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: any;
  // planets: Observable<any>;

 constructor(private planetsS: PlanetsService) { }

  ngOnInit() {
    this.planetsS.getPlanets().subscribe( data => {
      this.planets = data['results'];
      console.log('Planets url', this.planets);
   });

  }

}
