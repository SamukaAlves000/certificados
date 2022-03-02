import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEmpilhadeiraP1Component } from './certificado-nr11-op-empilhadeira-p1.component';

describe('CertificadoNR11OpEmpilhadeiraP1Component', () => {
  let component: CertificadoNR11OpEmpilhadeiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpEmpilhadeiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEmpilhadeiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEmpilhadeiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
