import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetificadoNR23BrigadaIncendioIP1Component } from './cetificado-nr23-brigada-incendio-i-p1.component';

describe('CetificadoNR23BrigadaIncendioIP1Component', () => {
  let component: CetificadoNR23BrigadaIncendioIP1Component;
  let fixture: ComponentFixture<CetificadoNR23BrigadaIncendioIP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetificadoNR23BrigadaIncendioIP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetificadoNR23BrigadaIncendioIP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
