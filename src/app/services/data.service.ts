import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private raoninos = new BehaviorSubject(0);
  current = this.raoninos.asObservable();

  constructor() { }

  changeRaoninos(value: number) {
    this.raoninos.next(value);
  }

}
