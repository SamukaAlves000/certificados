import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpMunckP1Component } from './certificado-nr11-op-munck-p1.component';

describe('CertificadoNR11OpMunckP1Component', () => {
  let component: CertificadoNR11OpMunckP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpMunckP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpMunckP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpMunckP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
