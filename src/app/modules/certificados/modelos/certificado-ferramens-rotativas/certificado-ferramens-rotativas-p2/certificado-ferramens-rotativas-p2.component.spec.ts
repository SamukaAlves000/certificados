import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoFerramensRotativasP2Component } from './certificado-ferramens-rotativas-p2.component';

describe('CertificadoFerramensRotativasP2Component', () => {
  let component: CertificadoFerramensRotativasP2Component;
  let fixture: ComponentFixture<CertificadoFerramensRotativasP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoFerramensRotativasP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoFerramensRotativasP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
