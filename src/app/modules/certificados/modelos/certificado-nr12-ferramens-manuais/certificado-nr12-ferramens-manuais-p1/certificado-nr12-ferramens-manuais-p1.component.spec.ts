import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensManuaisP1Component } from './certificado-nr12-ferramens-manuais-p1.component';

describe('CertificadoNR12FerramensManuaisP1Component', () => {
  let component: CertificadoNR12FerramensManuaisP1Component;
  let fixture: ComponentFixture<CertificadoNR12FerramensManuaisP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensManuaisP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensManuaisP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
