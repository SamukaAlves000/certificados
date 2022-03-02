import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11SinalizacaoAmarracaoCargaP1Component } from './certificado-nr11-sinalizacao-amarracao-carga-p1.component';

describe('CertificadoNR11SinalizacaoAmarracaoCargaP1Component', () => {
  let component: CertificadoNR11SinalizacaoAmarracaoCargaP1Component;
  let fixture: ComponentFixture<CertificadoNR11SinalizacaoAmarracaoCargaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11SinalizacaoAmarracaoCargaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11SinalizacaoAmarracaoCargaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
