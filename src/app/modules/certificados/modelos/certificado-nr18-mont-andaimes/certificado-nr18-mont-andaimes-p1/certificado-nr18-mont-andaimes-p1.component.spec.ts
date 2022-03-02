import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18MontAndaimesP1Component } from './certificado-nr18-mont-andaimes-p1.component';

describe('CertificadoNR18MontAndaimesP1Component', () => {
  let component: CertificadoNR18MontAndaimesP1Component;
  let fixture: ComponentFixture<CertificadoNR18MontAndaimesP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18MontAndaimesP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18MontAndaimesP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
