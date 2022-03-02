import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34EspConfinadoTOTALP2Component } from './certificado-nr34-esp-confinado-total-p2.component';

describe('CertificadoNR34EspConfinadoTOTALP2Component', () => {
  let component: CertificadoNR34EspConfinadoTOTALP2Component;
  let fixture: ComponentFixture<CertificadoNR34EspConfinadoTOTALP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34EspConfinadoTOTALP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34EspConfinadoTOTALP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
