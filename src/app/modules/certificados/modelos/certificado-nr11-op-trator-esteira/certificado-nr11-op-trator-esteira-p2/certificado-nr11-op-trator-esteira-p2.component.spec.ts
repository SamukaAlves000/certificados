import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorEsteiraP2Component } from './certificado-nr11-op-trator-esteira-p2.component';

describe('CertificadoNR11OpTratorEsteiraP2Component', () => {
  let component: CertificadoNR11OpTratorEsteiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpTratorEsteiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorEsteiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorEsteiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
