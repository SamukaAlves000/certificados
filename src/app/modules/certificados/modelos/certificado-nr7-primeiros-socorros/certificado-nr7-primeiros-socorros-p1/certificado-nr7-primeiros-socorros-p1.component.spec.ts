import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR7PrimeirosSocorrosP1Component } from './certificado-nr7-primeiros-socorros-p1.component';

describe('CertificadoNR7PrimeirosSocorrosP1Component', () => {
  let component: CertificadoNR7PrimeirosSocorrosP1Component;
  let fixture: ComponentFixture<CertificadoNR7PrimeirosSocorrosP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR7PrimeirosSocorrosP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR7PrimeirosSocorrosP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
