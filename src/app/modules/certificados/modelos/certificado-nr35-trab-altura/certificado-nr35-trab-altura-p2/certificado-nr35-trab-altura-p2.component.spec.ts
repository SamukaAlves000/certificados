import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabAlturaP2Component } from './certificado-nr35-trab-altura-p2.component';

describe('CertificadoNR35TrabAlturaP2Component', () => {
  let component: CertificadoNR35TrabAlturaP2Component;
  let fixture: ComponentFixture<CertificadoNR35TrabAlturaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabAlturaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabAlturaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
