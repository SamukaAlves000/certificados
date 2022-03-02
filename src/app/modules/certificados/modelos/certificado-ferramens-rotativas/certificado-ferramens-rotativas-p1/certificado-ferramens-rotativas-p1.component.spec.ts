import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoFerramensRotativasP1Component } from './certificado-ferramens-rotativas-p1.component';

describe('CertificadoFerramensRotativasP1Component', () => {
  let component: CertificadoFerramensRotativasP1Component;
  let fixture: ComponentFixture<CertificadoFerramensRotativasP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoFerramensRotativasP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoFerramensRotativasP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
