import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensRotEletropP1Component } from './certificado-nr12-ferramens-rot-eletrop-p1.component';

describe('CertificadoNR12FerramensRotEletropP1Component', () => {
  let component: CertificadoNR12FerramensRotEletropP1Component;
  let fixture: ComponentFixture<CertificadoNR12FerramensRotEletropP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensRotEletropP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensRotEletropP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
