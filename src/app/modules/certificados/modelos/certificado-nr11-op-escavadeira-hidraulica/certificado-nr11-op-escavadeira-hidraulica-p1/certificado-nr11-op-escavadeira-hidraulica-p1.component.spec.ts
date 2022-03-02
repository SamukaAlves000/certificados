import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEscavadeiraHidraulicaP1Component } from './certificado-nr11-op-escavadeira-hidraulica-p1.component';

describe('CertificadoNR11OpEscavadeiraHidraulicaP1Component', () => {
  let component: CertificadoNR11OpEscavadeiraHidraulicaP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpEscavadeiraHidraulicaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEscavadeiraHidraulicaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEscavadeiraHidraulicaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
