import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11AmarracaoCargaP1Component } from './certificado-nr11-amarracao-carga-p1.component';

describe('CertificadoNR11AmarracaoCargaP1Component', () => {
  let component: CertificadoNR11AmarracaoCargaP1Component;
  let fixture: ComponentFixture<CertificadoNR11AmarracaoCargaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11AmarracaoCargaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11AmarracaoCargaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
