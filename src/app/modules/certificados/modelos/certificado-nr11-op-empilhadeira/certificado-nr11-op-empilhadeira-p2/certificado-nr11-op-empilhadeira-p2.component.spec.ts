import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEmpilhadeiraP2Component } from './certificado-nr11-op-empilhadeira-p2.component';

describe('CertificadoNR11OpEmpilhadeiraP2Component', () => {
  let component: CertificadoNR11OpEmpilhadeiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpEmpilhadeiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEmpilhadeiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEmpilhadeiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
