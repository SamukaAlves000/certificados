import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEscavadeiraHidraulicaP2Component } from './certificado-nr11-op-escavadeira-hidraulica-p2.component';

describe('CertificadoNR11OpEscavadeiraHidraulicaP2Component', () => {
  let component: CertificadoNR11OpEscavadeiraHidraulicaP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpEscavadeiraHidraulicaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEscavadeiraHidraulicaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEscavadeiraHidraulicaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
