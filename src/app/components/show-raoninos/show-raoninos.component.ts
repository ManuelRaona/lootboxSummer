import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-raoninos',
  templateUrl: './show-raoninos.component.html',
  styleUrls: ['./show-raoninos.component.scss']
})
export class ShowRaoninosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public addRaoninos(number) {
    console.log(number);
  }

}
