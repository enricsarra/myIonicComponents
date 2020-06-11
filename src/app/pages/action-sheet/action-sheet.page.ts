import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  @Input() titulo: string;
  constructor( private actionSheetController: ActionSheetController) { }

  action = '';

  ngOnInit() {
  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      backdropDismiss: false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'rojo', // ver global.scss
        handler: () => {
          // console.log('Delete clicked');
          this.action = 'Delete clicked';
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          // console.log('Share clicked');
          this.action = 'Share clicked';
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          // console.log('Favorite clicked');
          this.action = 'Favorite clicked';
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // console.log('Cancel clicked');
          this.action = 'Cancel  clicked';
        }
      }]
    });
    await actionSheet.present();
  }


}
