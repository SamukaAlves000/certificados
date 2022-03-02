import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18OpPTAP1Component } from './certificado-nr18-op-pta-p1.component';

describe('CertificadoNR18OpPTAP1Component', () => {
  let component: CertificadoNR18OpPTAP1Component;
  let fixture: ComponentFixture<CertificadoNR18OpPTAP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18OpPTAP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18OpPTAP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
