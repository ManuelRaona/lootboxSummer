import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})


export class BuyComponent implements OnInit {
@Output() public add = new EventEmitter<number>();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.current.subscribe(raoninos => {
      console.log(raoninos);
    });
  }


  buyRaoninos(money: number) {
    if (money === 10000) {
      this.data.changeRaoninos(10000);
    }
    if (money === 50000) {
      this.data.changeRaoninos(50000);
    }
    if (money === 100000) {
      this.data.changeRaoninos(100000);
    }
  }

}
