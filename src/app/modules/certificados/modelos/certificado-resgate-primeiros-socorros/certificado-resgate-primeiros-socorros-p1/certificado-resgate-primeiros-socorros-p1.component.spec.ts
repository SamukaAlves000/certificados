import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoResgatePrimeirosSocorrosP1Component } from './certificado-resgate-primeiros-socorros-p1.component';

describe('CertificadoResgatePrimeirosSocorrosP1Component', () => {
  let component: CertificadoResgatePrimeirosSocorrosP1Component;
  let fixture: ComponentFixture<CertificadoResgatePrimeirosSocorrosP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoResgatePrimeirosSocorrosP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoResgatePrimeirosSocorrosP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
