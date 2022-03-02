import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23CombateIncendioP1Component } from './certificado-nr23-combate-incendio-p1.component';

describe('CertificadoNR23CombateIncendioP1Component', () => {
  let component: CertificadoNR23CombateIncendioP1Component;
  let fixture: ComponentFixture<CertificadoNR23CombateIncendioP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23CombateIncendioP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23CombateIncendioP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
