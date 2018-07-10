import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})


export class BuyComponent implements OnInit {
@Output() add: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // buy(coste) {
  //   const totalRaoninos = localStorage.getItem('raoninos');
  //   let raoninos = parseInt(totalRaoninos, 10);
  //   raoninos = raoninos + coste;
  //   localStorage.setItem('raoninos', raoninos.toString());
  // }

  public buy(operation: Number) {
    const texto = 'HOLAAA';
    this.add.emit(texto);
  }

}
