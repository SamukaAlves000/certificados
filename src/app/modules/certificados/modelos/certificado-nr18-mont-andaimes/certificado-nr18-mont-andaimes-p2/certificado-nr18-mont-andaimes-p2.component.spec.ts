import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18MontAndaimesP2Component } from './certificado-nr18-mont-andaimes-p2.component';

describe('CertificadoNR18MontAndaimesP2Component', () => {
  let component: CertificadoNR18MontAndaimesP2Component;
  let fixture: ComponentFixture<CertificadoNR18MontAndaimesP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18MontAndaimesP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18MontAndaimesP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
