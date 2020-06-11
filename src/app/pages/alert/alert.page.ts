import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;
  action = '';
  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
  }
  async presentInput() {

    const input = await this.alertCtrl.create({
      header: 'Input',
      subHeader: 'Enter your name:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Confirm Cancel');
            this.action = 'INPUT Confirm Cancel';
          }
        }, {
          text: 'OK',
          handler: ( data ) => {
            // console.log('Confirm Ok', data);
            this.titulo = data.txtNombre;
            this.action = `INPUT Confirm Ok!: ${ data.txtNombre}`;
          }
        }
      ]
    });

    await input.present();

  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Cancelar');
            this.action = 'Cancel ALERT clicked ';
          }
        },
        {
            text: 'Ok',
            handler: (blah) => {
              // console.log('Botón OK');
              this.action = 'Button OK ALERT clicked ';
          }
        }
      ]
    });

    await alert.present();
  }

}
