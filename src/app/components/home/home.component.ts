import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  raoninos = 100000;
  comprar = true;

  constructor() { }

  ngOnInit() {
  }

  buy() {
    this.comprar = false;
  }

  buyRaoninos() {
    this.comprar = true;
  }
}
