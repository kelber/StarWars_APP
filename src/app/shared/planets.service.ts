import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanetsService {

  // pass url to environment.ts
  urlPlanet = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(this.urlPlanet);
  }

}
