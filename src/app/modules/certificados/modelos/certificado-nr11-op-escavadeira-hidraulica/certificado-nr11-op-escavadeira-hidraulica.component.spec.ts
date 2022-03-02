import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEscavadeiraHidraulicaComponent } from './certificado-nr11-op-escavadeira-hidraulica.component';

describe('CertificadoNR11OpEscavadeiraHidraulicaComponent', () => {
  let component: CertificadoNR11OpEscavadeiraHidraulicaComponent;
  let fixture: ComponentFixture<CertificadoNR11OpEscavadeiraHidraulicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEscavadeiraHidraulicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEscavadeiraHidraulicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
