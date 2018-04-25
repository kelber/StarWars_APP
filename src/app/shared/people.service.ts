import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class PeopleService {

  _url = environment.api.SWAPI_API;


  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(`${this._url}/people/`);
  }

 getPeopleByName(name: string) {
    return this.http.get(`${this._url}${name}`);
  }

}
