import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorAgricolaP1Component } from './certificado-nr11-op-trator-agricola-p1.component';

describe('CertificadoNR11OpTratorAgricolaP1Component', () => {
  let component: CertificadoNR11OpTratorAgricolaP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpTratorAgricolaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorAgricolaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorAgricolaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
