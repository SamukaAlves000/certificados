import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR7PrimeirosSocorrosP2Component } from './certificado-nr7-primeiros-socorros-p2.component';

describe('CertificadoNR7PrimeirosSocorrosP2Component', () => {
  let component: CertificadoNR7PrimeirosSocorrosP2Component;
  let fixture: ComponentFixture<CertificadoNR7PrimeirosSocorrosP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR7PrimeirosSocorrosP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR7PrimeirosSocorrosP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
