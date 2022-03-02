import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorEsteiraP1Component } from './certificado-nr11-op-trator-esteira-p1.component';

describe('CertificadoNR11OpTratorEsteiraP1Component', () => {
  let component: CertificadoNR11OpTratorEsteiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpTratorEsteiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorEsteiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorEsteiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
