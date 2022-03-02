import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr18P1Component } from './nr18-p1.component';

describe('Nr18P1Component', () => {
  let component: Nr18P1Component;
  let fixture: ComponentFixture<Nr18P1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr18P1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr18P1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
