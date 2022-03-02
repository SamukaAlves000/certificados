import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR17ErgonomiaP2Component } from './certificado-nr17-ergonomia-p2.component';

describe('CertificadoNR17ErgonomiaP2Component', () => {
  let component: CertificadoNR17ErgonomiaP2Component;
  let fixture: ComponentFixture<CertificadoNR17ErgonomiaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR17ErgonomiaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR17ErgonomiaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
