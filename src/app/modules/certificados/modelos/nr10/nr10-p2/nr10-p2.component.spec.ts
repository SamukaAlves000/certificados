import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr10P2Component } from './nr10-p2.component';

describe('Nr10P2Component', () => {
  let component: Nr10P2Component;
  let fixture: ComponentFixture<Nr10P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr10P2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr10P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
