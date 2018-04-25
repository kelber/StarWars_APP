import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../shared/people.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {


  // name: Observable<any>;
  name: any;
  constructor(private peopleS: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.peopleS.getPeopleByName(this.route.params['name']).subscribe( data => {
  //     const name = data;
  //  });
      // console.log('person e...', name);
      this.route.paramMap.subscribe( (params: ParamMap) => {
        this.name = params.get('name');
        console.log('nome saindo', this.name);
      });

  }


}
