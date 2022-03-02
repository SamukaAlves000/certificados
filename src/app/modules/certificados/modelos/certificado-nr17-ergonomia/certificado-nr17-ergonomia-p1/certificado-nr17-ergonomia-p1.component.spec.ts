import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR17ErgonomiaP1Component } from './certificado-nr17-ergonomia-p1.component';

describe('CertificadoNR17ErgonomiaP1Component', () => {
  let component: CertificadoNR17ErgonomiaP1Component;
  let fixture: ComponentFixture<CertificadoNR17ErgonomiaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR17ErgonomiaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR17ErgonomiaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
