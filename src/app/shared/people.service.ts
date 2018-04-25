import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PeopleService {

  // pass url to environment.ts
  url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(this.url);
  }

 getPeopleByName(name: string) {
    return this.http.get(`${this.url}${name}`);
  }

}
