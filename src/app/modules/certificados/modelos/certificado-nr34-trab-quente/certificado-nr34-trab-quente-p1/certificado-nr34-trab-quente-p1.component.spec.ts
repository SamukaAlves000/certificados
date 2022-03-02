import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteP1Component } from './certificado-nr34-trab-quente-p1.component';

describe('CertificadoNR34TrabQuenteP1Component', () => {
  let component: CertificadoNR34TrabQuenteP1Component;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
