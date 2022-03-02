import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR10SEPP2Component } from './certificado-nr10-sep-p2.component';

describe('CertificadoNR10SEPP2Component', () => {
  let component: CertificadoNR10SEPP2Component;
  let fixture: ComponentFixture<CertificadoNR10SEPP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR10SEPP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR10SEPP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
