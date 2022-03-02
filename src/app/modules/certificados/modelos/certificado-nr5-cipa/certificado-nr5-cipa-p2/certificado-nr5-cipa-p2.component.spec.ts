import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR5CIPAP2Component } from './certificado-nr5-cipa-p2.component';

describe('CertificadoNR5CIPAP2Component', () => {
  let component: CertificadoNR5CIPAP2Component;
  let fixture: ComponentFixture<CertificadoNR5CIPAP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR5CIPAP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR5CIPAP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
