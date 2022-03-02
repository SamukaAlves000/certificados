import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteTOTALComponent } from './certificado-nr34-trab-quente-total.component';

describe('CertificadoNR34TrabQuenteTOTALComponent', () => {
  let component: CertificadoNR34TrabQuenteTOTALComponent;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteTOTALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteTOTALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteTOTALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
