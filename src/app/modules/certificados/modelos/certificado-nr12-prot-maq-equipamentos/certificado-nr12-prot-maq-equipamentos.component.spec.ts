import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12ProtMaqEquipamentosComponent } from './certificado-nr12-prot-maq-equipamentos.component';

describe('CertificadoNR12ProtMaqEquipamentosComponent', () => {
  let component: CertificadoNR12ProtMaqEquipamentosComponent;
  let fixture: ComponentFixture<CertificadoNR12ProtMaqEquipamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12ProtMaqEquipamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12ProtMaqEquipamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
