import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31SegOpMaqAgricolasP2Component } from './certificado-nr12-nr31-seg-op-maq-agricolas-p2.component';

describe('CertificadoNR12NR31SegOpMaqAgricolasP2Component', () => {
  let component: CertificadoNR12NR31SegOpMaqAgricolasP2Component;
  let fixture: ComponentFixture<CertificadoNR12NR31SegOpMaqAgricolasP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31SegOpMaqAgricolasP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31SegOpMaqAgricolasP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
