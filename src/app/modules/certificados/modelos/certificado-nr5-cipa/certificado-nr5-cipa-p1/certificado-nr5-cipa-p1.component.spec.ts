import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR5CIPAP1Component } from './certificado-nr5-cipa-p1.component';

describe('CertificadoNR5CIPAP1Component', () => {
  let component: CertificadoNR5CIPAP1Component;
  let fixture: ComponentFixture<CertificadoNR5CIPAP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR5CIPAP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR5CIPAP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
