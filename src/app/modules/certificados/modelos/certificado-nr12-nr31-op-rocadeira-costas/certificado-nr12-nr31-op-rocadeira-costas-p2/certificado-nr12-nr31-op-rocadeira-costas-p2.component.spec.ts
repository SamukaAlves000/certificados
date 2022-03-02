import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31OpRocadeiraCostasP2Component } from './certificado-nr12-nr31-op-rocadeira-costas-p2.component';

describe('CertificadoNR12NR31OpRocadeiraCostasP2Component', () => {
  let component: CertificadoNR12NR31OpRocadeiraCostasP2Component;
  let fixture: ComponentFixture<CertificadoNR12NR31OpRocadeiraCostasP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31OpRocadeiraCostasP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31OpRocadeiraCostasP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
