import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightComponent } from './hight.component';

describe('HightComponent', () => {
  let component: HightComponent;
  let fixture: ComponentFixture<HightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
