import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoResgatePrimeirosSocorrosP2Component } from './certificado-resgate-primeiros-socorros-p2.component';

describe('CertificadoResgatePrimeirosSocorrosP2Component', () => {
  let component: CertificadoResgatePrimeirosSocorrosP2Component;
  let fixture: ComponentFixture<CertificadoResgatePrimeirosSocorrosP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoResgatePrimeirosSocorrosP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoResgatePrimeirosSocorrosP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
