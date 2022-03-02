import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23CombateIncendioP2Component } from './certificado-nr23-combate-incendio-p2.component';

describe('CertificadoNR23CombateIncendioP2Component', () => {
  let component: CertificadoNR23CombateIncendioP2Component;
  let fixture: ComponentFixture<CertificadoNR23CombateIncendioP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23CombateIncendioP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23CombateIncendioP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
