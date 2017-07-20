import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  agency: Array<Agency>;
  constructor() { }

  ngOnInit() {

    this.agency = [{
      agencyId: 1,
      agencyBrand: 'iProspect',
      country: {
        name: 'India'
      },
      city: 'Pune',
      status: true,
      notifications: 5,
      manager: [{
        name: 'vikas'
      },{
        name: 'vikas'
      },{
        name: 'vikas'
      }]
    },{
      agencyId: 1,
      agencyBrand: 'iProspect',
      country: {
        name: 'India'
      },
      city: 'Pune',
      status: true,
      notifications: 5,
      manager: [{
        name: 'vikas'
      },{
        name: 'vikas'
      }]
    } ]
  }

}

interface Agency {
  agencyId: number;
  agencyBrand: string;
  country: Country;
  city: string;
  status: boolean;
  notifications: number;
  manager: [Manager];
}

interface Manager {
  id?: number;
  name: string;
}

interface Country {
  id?: number,
  name: string
}