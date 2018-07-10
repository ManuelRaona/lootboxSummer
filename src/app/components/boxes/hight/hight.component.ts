import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hight',
  templateUrl: './hight.component.html',
  styleUrls: ['./hight.component.scss']
})
export class HightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buyHight(price: number) {
    console.log(price);
  }
}
