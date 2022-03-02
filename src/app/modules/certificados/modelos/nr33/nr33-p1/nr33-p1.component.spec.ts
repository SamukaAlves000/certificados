import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr33P1Component } from './nr33-p1.component';

describe('Nr33P1Component', () => {
  let component: Nr33P1Component;
  let fixture: ComponentFixture<Nr33P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr33P1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr33P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
