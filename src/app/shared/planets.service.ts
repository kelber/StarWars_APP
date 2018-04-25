import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class PlanetsService {

  // pass url to environment.ts
  // urlPlanet = 'https://swapi.co/api/planets/';
  _urlPlanet = environment.api.SWAPI_API;

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(`${this._urlPlanet}/planets/`);
  }

}
