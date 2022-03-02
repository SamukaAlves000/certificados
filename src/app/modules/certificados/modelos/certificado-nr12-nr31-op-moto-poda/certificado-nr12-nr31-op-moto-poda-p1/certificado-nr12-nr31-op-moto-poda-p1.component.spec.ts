import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31OpMotoPodaP1Component } from './certificado-nr12-nr31-op-moto-poda-p1.component';

describe('CertificadoNR12NR31OpMotoPodaP1Component', () => {
  let component: CertificadoNR12NR31OpMotoPodaP1Component;
  let fixture: ComponentFixture<CertificadoNR12NR31OpMotoPodaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31OpMotoPodaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31OpMotoPodaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
