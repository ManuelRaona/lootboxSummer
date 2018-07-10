import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRaoninosComponent } from './show-raoninos.component';

describe('ShowRaoninosComponent', () => {
  let component: ShowRaoninosComponent;
  let fixture: ComponentFixture<ShowRaoninosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRaoninosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRaoninosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
