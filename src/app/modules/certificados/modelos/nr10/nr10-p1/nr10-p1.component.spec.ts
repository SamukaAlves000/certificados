import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10P1Component } from './nr10-p1.component';

describe('Nr10P1Component', () => {
  let component: Nr10P1Component;
  let fixture: ComponentFixture<Nr10P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr10P1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr10P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
