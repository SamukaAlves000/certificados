import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPrensaEnfardadeiraP2Component } from './certificado-nr11-op-prensa-enfardadeira-p2.component';

describe('CertificadoNR11OpPrensaEnfardadeiraP2Component', () => {
  let component: CertificadoNR11OpPrensaEnfardadeiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpPrensaEnfardadeiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPrensaEnfardadeiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPrensaEnfardadeiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
