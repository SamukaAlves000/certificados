import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabalhoAlturaTOTALComponent } from './certificado-nr35-trabalho-altura-total.component';

describe('CertificadoNR35TrabalhoAlturaTOTALComponent', () => {
  let component: CertificadoNR35TrabalhoAlturaTOTALComponent;
  let fixture: ComponentFixture<CertificadoNR35TrabalhoAlturaTOTALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabalhoAlturaTOTALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabalhoAlturaTOTALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
