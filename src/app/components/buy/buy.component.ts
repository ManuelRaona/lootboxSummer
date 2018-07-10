import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})


export class BuyComponent implements OnInit {
@Output() public add = new EventEmitter<number>();

  // raoninos: number;

  constructor() { }

  ngOnInit() {
  }


  buyRaoninos(money: number) {
    if (money === 10000) {
      this.add.emit(1000);
      // this.raoninos += 10000;
    }
    if (money === 50000) {
      this.add.emit(50000);
      // this.raoninos += 50000;
    }
    if (money === 100000) {
      this.add.emit(100000);
      // this.raoninos += 100000;
    }
    // this.comprar = true;
  }

}
