import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr33Component } from './nr33.component';

describe('Nr33Component', () => {
  let component: Nr33Component;
  let fixture: ComponentFixture<Nr33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
