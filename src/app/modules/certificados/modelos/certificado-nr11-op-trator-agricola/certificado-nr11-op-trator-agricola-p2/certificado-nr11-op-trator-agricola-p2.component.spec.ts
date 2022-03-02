import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorAgricolaP2Component } from './certificado-nr11-op-trator-agricola-p2.component';

describe('CertificadoNR11OpTratorAgricolaP2Component', () => {
  let component: CertificadoNR11OpTratorAgricolaP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpTratorAgricolaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorAgricolaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorAgricolaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
