import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr18P2Component } from './nr18-p2.component';

describe('Nr18P2Component', () => {
  let component: Nr18P2Component;
  let fixture: ComponentFixture<Nr18P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr18P2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr18P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
