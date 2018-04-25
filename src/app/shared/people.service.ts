import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(this.url);
  }

 getPeopleByName(name: string) {
    return this.http.get(`${this.url}${name}`);
  }

}
