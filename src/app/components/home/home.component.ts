import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  raoninos = 100000;
  comprar = true;
  lowBox = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png']; // poner los nombres de las imagenes siempre con la extension .png
  mediumBox = ['', '', '', '']; // poner los nombres de las imagenes
  hihgtBox = ['', '', '', '']; // poner los nombres de las imagenes
  source = '';
  giftImg = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.current.subscribe(message => {
      this.raoninos += message;
      this.comprar = true;
    });
  }

  // Activa comprar Raoninos
  buy() {
    this.comprar = false;
  }

  buyBox(type: string) {
    if (type === 'low') {
      this.openLowBox();
      this.giftImg = true;
    }
    if (type === 'medium') {
      this.openMediumBox();
      this.giftImg = true;
    }
    if (type === 'hight') {
      this.openHightBox();
      this.giftImg = true;
    }
  }

  openLowBox() {
    this.raoninos -= 10000;
    const gift = this.randomize(this.lowBox.length - 1);
    this.source = 'assets/lowGifts/' + gift.toString() + '.png';
    console.log(gift);
  }

  openMediumBox() {
    this.raoninos -= 50000;
    const gift = this.randomize(this.mediumBox.length - 1);
    this.source = 'assets/mediumGifts/' + gift.toString() + '.png';
  }

  openHightBox() {
    this.raoninos -= 100000;
    const gift = this.randomize(this.hihgtBox.length - 1);
    this.source = 'assets/hightGifts/' + gift.toString() + '.png';
  }

  randomize(size) {
    const min = 0;
    return Math.floor(Math.random() * (size - min + 1)) + min;
  }

  closeGift() {
    this.giftImg = false;
  }

}
