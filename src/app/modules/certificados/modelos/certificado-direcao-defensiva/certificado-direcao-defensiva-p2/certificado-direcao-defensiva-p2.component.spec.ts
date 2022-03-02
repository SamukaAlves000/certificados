import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoDirecaoDefensivaP2Component } from './certificado-direcao-defensiva-p2.component';

describe('CertificadoDirecaoDefensivaP2Component', () => {
  let component: CertificadoDirecaoDefensivaP2Component;
  let fixture: ComponentFixture<CertificadoDirecaoDefensivaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoDirecaoDefensivaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoDirecaoDefensivaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
