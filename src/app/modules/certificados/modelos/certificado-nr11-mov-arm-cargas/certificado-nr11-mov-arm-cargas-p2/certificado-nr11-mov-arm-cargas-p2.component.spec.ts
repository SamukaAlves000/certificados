import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11MovArmCargasP2Component } from './certificado-nr11-mov-arm-cargas-p2.component';

describe('CertificadoNR11MovArmCargasP2Component', () => {
  let component: CertificadoNR11MovArmCargasP2Component;
  let fixture: ComponentFixture<CertificadoNR11MovArmCargasP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11MovArmCargasP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11MovArmCargasP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
