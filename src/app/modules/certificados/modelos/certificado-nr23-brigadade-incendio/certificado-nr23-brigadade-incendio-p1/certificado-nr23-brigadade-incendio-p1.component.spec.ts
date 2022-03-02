import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23BrigadadeIncendioP1Component } from './certificado-nr23-brigadade-incendio-p1.component';

describe('CertificadoNR23BrigadadeIncendioP1Component', () => {
  let component: CertificadoNR23BrigadadeIncendioP1Component;
  let fixture: ComponentFixture<CertificadoNR23BrigadadeIncendioP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23BrigadadeIncendioP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23BrigadadeIncendioP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
