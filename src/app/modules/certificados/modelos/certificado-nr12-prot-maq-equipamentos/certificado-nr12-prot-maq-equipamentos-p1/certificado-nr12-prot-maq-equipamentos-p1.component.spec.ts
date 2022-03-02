import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12ProtMaqEquipamentosP1Component } from './certificado-nr12-prot-maq-equipamentos-p1.component';

describe('CertificadoNR12ProtMaqEquipamentosP1Component', () => {
  let component: CertificadoNR12ProtMaqEquipamentosP1Component;
  let fixture: ComponentFixture<CertificadoNR12ProtMaqEquipamentosP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12ProtMaqEquipamentosP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12ProtMaqEquipamentosP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
