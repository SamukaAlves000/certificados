import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34MaqRotativasP2Component } from './certificado-nr34-maq-rotativas-p2.component';

describe('CertificadoNR34MaqRotativasP2Component', () => {
  let component: CertificadoNR34MaqRotativasP2Component;
  let fixture: ComponentFixture<CertificadoNR34MaqRotativasP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34MaqRotativasP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34MaqRotativasP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
