import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoDirecaoDefensivaP1Component } from './certificado-direcao-defensiva-p1.component';

describe('CertificadoDirecaoDefensivaP1Component', () => {
  let component: CertificadoDirecaoDefensivaP1Component;
  let fixture: ComponentFixture<CertificadoDirecaoDefensivaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoDirecaoDefensivaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoDirecaoDefensivaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
