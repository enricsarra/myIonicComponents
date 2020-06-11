import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;
  action = '';

  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save!');
          console.log(evento);
          this.action = `Clicked Save!   ${evento.day.text} - ${evento.month.text} - ${evento.year.text}`;
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };

  }

  cambioFecha( event ) {
    // console.log('ionChange', event );
    // console.log('Date', new Date( event.detail.value ) );
    this.action = `new date! ${new Date( event.detail.value )}`;
  }

}
