import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11AmarracaoCargaComponent } from './certificado-nr11-amarracao-carga.component';

describe('CertificadoNR11AmarracaoCargaComponent', () => {
  let component: CertificadoNR11AmarracaoCargaComponent;
  let fixture: ComponentFixture<CertificadoNR11AmarracaoCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11AmarracaoCargaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11AmarracaoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
