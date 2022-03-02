import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensRotEletropP2Component } from './certificado-nr12-ferramens-rot-eletrop-p2.component';

describe('CertificadoNR12FerramensRotEletropP2Component', () => {
  let component: CertificadoNR12FerramensRotEletropP2Component;
  let fixture: ComponentFixture<CertificadoNR12FerramensRotEletropP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensRotEletropP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensRotEletropP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
