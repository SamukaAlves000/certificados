import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr18Component } from './nr18.component';

describe('Nr18Component', () => {
  let component: Nr18Component;
  let fixture: ComponentFixture<Nr18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
