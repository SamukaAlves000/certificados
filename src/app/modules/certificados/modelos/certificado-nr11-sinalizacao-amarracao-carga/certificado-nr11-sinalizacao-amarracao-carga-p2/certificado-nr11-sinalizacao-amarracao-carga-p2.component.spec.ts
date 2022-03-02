import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11SinalizacaoAmarracaoCargaP2Component } from './certificado-nr11-sinalizacao-amarracao-carga-p2.component';

describe('CertificadoNR11SinalizacaoAmarracaoCargaP2Component', () => {
  let component: CertificadoNR11SinalizacaoAmarracaoCargaP2Component;
  let fixture: ComponentFixture<CertificadoNR11SinalizacaoAmarracaoCargaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11SinalizacaoAmarracaoCargaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11SinalizacaoAmarracaoCargaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
