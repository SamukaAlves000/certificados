import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34EspConfinadoTOTALComponent } from './certificado-nr34-esp-confinado-total.component';

describe('CertificadoNR34EspConfinadoTOTALComponent', () => {
  let component: CertificadoNR34EspConfinadoTOTALComponent;
  let fixture: ComponentFixture<CertificadoNR34EspConfinadoTOTALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34EspConfinadoTOTALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34EspConfinadoTOTALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
