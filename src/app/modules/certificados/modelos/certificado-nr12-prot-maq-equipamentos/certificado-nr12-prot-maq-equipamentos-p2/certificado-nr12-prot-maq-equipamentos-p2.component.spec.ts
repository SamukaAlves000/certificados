import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12ProtMaqEquipamentosP2Component } from './certificado-nr12-prot-maq-equipamentos-p2.component';

describe('CertificadoNR12ProtMaqEquipamentosP2Component', () => {
  let component: CertificadoNR12ProtMaqEquipamentosP2Component;
  let fixture: ComponentFixture<CertificadoNR12ProtMaqEquipamentosP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12ProtMaqEquipamentosP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12ProtMaqEquipamentosP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
