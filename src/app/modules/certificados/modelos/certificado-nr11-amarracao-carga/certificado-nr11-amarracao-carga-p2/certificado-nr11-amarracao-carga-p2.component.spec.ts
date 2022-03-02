import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11AmarracaoCargaP2Component } from './certificado-nr11-amarracao-carga-p2.component';

describe('CertificadoNR11AmarracaoCargaP2Component', () => {
  let component: CertificadoNR11AmarracaoCargaP2Component;
  let fixture: ComponentFixture<CertificadoNR11AmarracaoCargaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11AmarracaoCargaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11AmarracaoCargaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
