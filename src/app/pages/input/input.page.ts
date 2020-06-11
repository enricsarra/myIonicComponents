import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;

  usuario = {
    email: '',
    password: ''
  };
  action = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    // console.log('Form submit');
    // console.log( this.usuario );
    this.action = `Form submit: ${this.nombre} 
     - ${this.usuario.email} - ${this.usuario.password}`;
  }

}
