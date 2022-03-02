import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteTOTALP1Component } from './certificado-nr34-trab-quente-total-p1.component';

describe('CertificadoNR34TrabQuenteTOTALP1Component', () => {
  let component: CertificadoNR34TrabQuenteTOTALP1Component;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteTOTALP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteTOTALP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteTOTALP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
