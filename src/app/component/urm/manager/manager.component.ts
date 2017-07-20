import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
isTrue: boolean = false;
  constructor() { }

  ngOnInit() {
  }


  showDetails(){

    this.isTrue = true;
  }
}
