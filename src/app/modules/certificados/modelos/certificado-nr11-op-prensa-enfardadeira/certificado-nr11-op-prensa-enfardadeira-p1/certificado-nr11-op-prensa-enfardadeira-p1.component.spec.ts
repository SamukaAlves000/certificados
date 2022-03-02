import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPrensaEnfardadeiraP1Component } from './certificado-nr11-op-prensa-enfardadeira-p1.component';

describe('CertificadoNR11OpPrensaEnfardadeiraP1Component', () => {
  let component: CertificadoNR11OpPrensaEnfardadeiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpPrensaEnfardadeiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPrensaEnfardadeiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPrensaEnfardadeiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
