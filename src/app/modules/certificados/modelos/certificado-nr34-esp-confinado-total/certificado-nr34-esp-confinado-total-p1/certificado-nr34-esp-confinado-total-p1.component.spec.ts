import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34EspConfinadoTOTALP1Component } from './certificado-nr34-esp-confinado-total-p1.component';

describe('CertificadoNR34EspConfinadoTOTALP1Component', () => {
  let component: CertificadoNR34EspConfinadoTOTALP1Component;
  let fixture: ComponentFixture<CertificadoNR34EspConfinadoTOTALP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34EspConfinadoTOTALP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34EspConfinadoTOTALP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
