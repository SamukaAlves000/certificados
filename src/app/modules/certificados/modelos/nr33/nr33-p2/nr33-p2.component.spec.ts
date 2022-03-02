import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nr33P2Component } from './nr33-p2.component';

describe('Nr33P2Component', () => {
  let component: Nr33P2Component;
  let fixture: ComponentFixture<Nr33P2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nr33P2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nr33P2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
