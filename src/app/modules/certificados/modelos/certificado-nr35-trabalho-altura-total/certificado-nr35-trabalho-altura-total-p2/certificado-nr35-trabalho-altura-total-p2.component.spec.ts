import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabalhoAlturaTOTALP2Component } from './certificado-nr35-trabalho-altura-total-p2.component';

describe('CertificadoNR35TrabalhoAlturaTOTALP2Component', () => {
  let component: CertificadoNR35TrabalhoAlturaTOTALP2Component;
  let fixture: ComponentFixture<CertificadoNR35TrabalhoAlturaTOTALP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabalhoAlturaTOTALP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabalhoAlturaTOTALP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
