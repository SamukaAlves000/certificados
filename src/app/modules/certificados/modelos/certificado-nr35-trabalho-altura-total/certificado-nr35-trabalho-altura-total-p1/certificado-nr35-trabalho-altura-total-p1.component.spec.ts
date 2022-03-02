import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabalhoAlturaTOTALP1Component } from './certificado-nr35-trabalho-altura-total-p1.component';

describe('CertificadoNR35TrabalhoAlturaTOTALP1Component', () => {
  let component: CertificadoNR35TrabalhoAlturaTOTALP1Component;
  let fixture: ComponentFixture<CertificadoNR35TrabalhoAlturaTOTALP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabalhoAlturaTOTALP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabalhoAlturaTOTALP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
