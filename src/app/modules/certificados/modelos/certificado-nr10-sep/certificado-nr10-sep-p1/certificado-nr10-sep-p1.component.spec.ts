import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR10SEPP1Component } from './certificado-nr10-sep-p1.component';

describe('CertificadoNR10SEPP1Component', () => {
  let component: CertificadoNR10SEPP1Component;
  let fixture: ComponentFixture<CertificadoNR10SEPP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR10SEPP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR10SEPP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
