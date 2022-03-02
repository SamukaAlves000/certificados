import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18OpPTAP2Component } from './certificado-nr18-op-pta-p2.component';

describe('CertificadoNR18OpPTAP2Component', () => {
  let component: CertificadoNR18OpPTAP2Component;
  let fixture: ComponentFixture<CertificadoNR18OpPTAP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18OpPTAP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18OpPTAP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
