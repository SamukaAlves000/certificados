import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10Component } from './nr10.component';

describe('Nr10Component', () => {
  let component: Nr10Component;
  let fixture: ComponentFixture<Nr10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
