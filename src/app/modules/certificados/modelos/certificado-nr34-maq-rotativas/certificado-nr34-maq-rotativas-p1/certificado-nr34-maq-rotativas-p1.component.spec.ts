import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34MaqRotativasP1Component } from './certificado-nr34-maq-rotativas-p1.component';

describe('CertificadoNR34MaqRotativasP1Component', () => {
  let component: CertificadoNR34MaqRotativasP1Component;
  let fixture: ComponentFixture<CertificadoNR34MaqRotativasP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34MaqRotativasP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34MaqRotativasP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
