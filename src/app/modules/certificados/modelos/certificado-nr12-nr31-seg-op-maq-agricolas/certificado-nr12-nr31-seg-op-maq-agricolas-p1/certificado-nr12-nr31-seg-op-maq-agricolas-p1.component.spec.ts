import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31SegOpMaqAgricolasP1Component } from './certificado-nr12-nr31-seg-op-maq-agricolas-p1.component';

describe('CertificadoNR12NR31SegOpMaqAgricolasP1Component', () => {
  let component: CertificadoNR12NR31SegOpMaqAgricolasP1Component;
  let fixture: ComponentFixture<CertificadoNR12NR31SegOpMaqAgricolasP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31SegOpMaqAgricolasP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31SegOpMaqAgricolasP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
