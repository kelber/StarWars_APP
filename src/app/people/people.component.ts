import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './../home/home.component';
import { PeopleService } from '../shared/people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  // people: Observable<any>;
  people: any;
  nomeInicial = false;


  constructor(private peopleS: PeopleService, private router: Router, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.peopleS.getPeople().subscribe( data => {
      this.people = data['results'];
      // console.log('people', this.people);

    });


  }

    getPeopleByName(name) {
      console.log('ByName é ..', name);
      this.nomeInicial = true;
      this.peopleS.getPeopleByName(name);
      this.route.paramMap.subscribe( (params: ParamMap) => {
        this.people  = params.get('name');
        // const id = params.get('id');
        // this.departmentId = id;
       this.router.navigate(['/people' , name]);
      });
    }



}
