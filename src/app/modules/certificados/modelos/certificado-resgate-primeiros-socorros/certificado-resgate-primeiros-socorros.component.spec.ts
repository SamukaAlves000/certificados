import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoResgatePrimeirosSocorrosComponent } from './certificado-resgate-primeiros-socorros.component';

describe('CertificadoResgatePrimeirosSocorrosComponent', () => {
  let component: CertificadoResgatePrimeirosSocorrosComponent;
  let fixture: ComponentFixture<CertificadoResgatePrimeirosSocorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoResgatePrimeirosSocorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoResgatePrimeirosSocorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
