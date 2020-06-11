import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Share photos',
      desc: 'View and share amazing photos from around the world'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Listen to music',
      desc: 'All your favorite music is here'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Never forget anything',
      desc: 'The best calendar in the world at your disposal'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Your location',
      desc: 'We will always know where you are!'
    }
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');

  }

}
