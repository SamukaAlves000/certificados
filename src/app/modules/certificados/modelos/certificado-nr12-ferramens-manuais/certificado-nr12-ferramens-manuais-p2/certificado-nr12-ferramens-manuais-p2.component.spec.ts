import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensManuaisP2Component } from './certificado-nr12-ferramens-manuais-p2.component';

describe('CertificadoNR12FerramensManuaisP2Component', () => {
  let component: CertificadoNR12FerramensManuaisP2Component;
  let fixture: ComponentFixture<CertificadoNR12FerramensManuaisP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensManuaisP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensManuaisP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
