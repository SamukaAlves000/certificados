import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteP2Component } from './certificado-nr34-trab-quente-p2.component';

describe('CertificadoNR34TrabQuenteP2Component', () => {
  let component: CertificadoNR34TrabQuenteP2Component;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
