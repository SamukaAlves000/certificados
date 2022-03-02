import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabAlturaP1Component } from './certificado-nr35-trab-altura-p1.component';

describe('CertificadoNR35TrabAlturaP1Component', () => {
  let component: CertificadoNR35TrabAlturaP1Component;
  let fixture: ComponentFixture<CertificadoNR35TrabAlturaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabAlturaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabAlturaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
