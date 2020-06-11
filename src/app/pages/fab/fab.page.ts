import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {


  data = Array(10);
  action = '';
  constructor() { }

  ngOnInit() {
  }

  onClick( event ) {
    console.log(event.srcElement.name);
    this.action = `${event.srcElement.name} clicked`;
  }
}
