import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23BrigadadeIncendioP2Component } from './certificado-nr23-brigadade-incendio-p2.component';

describe('CertificadoNR23BrigadadeIncendioP2Component', () => {
  let component: CertificadoNR23BrigadadeIncendioP2Component;
  let fixture: ComponentFixture<CertificadoNR23BrigadadeIncendioP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23BrigadadeIncendioP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23BrigadadeIncendioP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
