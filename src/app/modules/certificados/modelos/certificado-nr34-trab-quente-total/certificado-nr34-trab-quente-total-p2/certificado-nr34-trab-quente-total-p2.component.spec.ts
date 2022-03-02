import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteTOTALP2Component } from './certificado-nr34-trab-quente-total-p2.component';

describe('CertificadoNR34TrabQuenteTOTALP2Component', () => {
  let component: CertificadoNR34TrabQuenteTOTALP2Component;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteTOTALP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteTOTALP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteTOTALP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
