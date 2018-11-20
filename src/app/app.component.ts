import { Component, OnInit } from '@angular/core';
import { CustomDropDownService } from './app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public filter={
    username: [],
    eventtype: [],
    applicationname: []
  }
cities;
  constructor(private customDropdownService:CustomDropDownService) {
  }
  ngOnInit() {
    this.cities = [
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  usernamechange = (event) => {
    this.filter.username = event.value;

    console.log(this.filter);
  }
  applicationnamechange= (event) => {
    this.filter.applicationname = event.value;

    console.log(this.filter);
  }
  eventtypechange = (event) => {
    this.filter.eventtype = event.value;

    console.log(this.filter);
  }
}





