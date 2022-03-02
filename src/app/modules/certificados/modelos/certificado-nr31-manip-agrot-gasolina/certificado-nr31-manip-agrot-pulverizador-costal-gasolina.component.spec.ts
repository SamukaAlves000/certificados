import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent } from './certificado-nr31-manip-agrot-pulverizador-costal-gasolina.component';

describe('CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent', () => {
  let component: CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent;
  let fixture: ComponentFixture<CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR31ManipAgrotPulverizadorCostalGasolinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
