import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR7PrimeirosSocorrosComponent } from './certificado-nr7-primeiros-socorros.component';

describe('CertificadoNR7PrimeirosSocorrosComponent', () => {
  let component: CertificadoNR7PrimeirosSocorrosComponent;
  let fixture: ComponentFixture<CertificadoNR7PrimeirosSocorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR7PrimeirosSocorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR7PrimeirosSocorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
