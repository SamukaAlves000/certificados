import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11MovArmCargasP1Component } from './certificado-nr11-mov-arm-cargas-p1.component';

describe('CertificadoNR11MovArmCargasP1Component', () => {
  let component: CertificadoNR11MovArmCargasP1Component;
  let fixture: ComponentFixture<CertificadoNR11MovArmCargasP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11MovArmCargasP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11MovArmCargasP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
