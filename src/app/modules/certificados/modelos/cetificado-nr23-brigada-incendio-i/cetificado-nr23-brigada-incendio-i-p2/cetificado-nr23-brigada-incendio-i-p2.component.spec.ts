import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetificadoNR23BrigadaIncendioIP2Component } from './cetificado-nr23-brigada-incendio-i-p2.component';

describe('CetificadoNR23BrigadaIncendioIP2Component', () => {
  let component: CetificadoNR23BrigadaIncendioIP2Component;
  let fixture: ComponentFixture<CetificadoNR23BrigadaIncendioIP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetificadoNR23BrigadaIncendioIP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetificadoNR23BrigadaIncendioIP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
