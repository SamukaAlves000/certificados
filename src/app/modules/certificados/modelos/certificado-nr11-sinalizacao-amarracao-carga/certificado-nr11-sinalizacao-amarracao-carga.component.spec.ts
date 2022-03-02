import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11SinalizacaoAmarracaoCargaComponent } from './certificado-nr11-sinalizacao-amarracao-carga.component';

describe('CertificadoNR11SinalizacaoAmarracaoCargaComponent', () => {
  let component: CertificadoNR11SinalizacaoAmarracaoCargaComponent;
  let fixture: ComponentFixture<CertificadoNR11SinalizacaoAmarracaoCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11SinalizacaoAmarracaoCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11SinalizacaoAmarracaoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
