import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35LinhaVidaP1Component } from './certificado-nr35-linha-vida-p1.component';

describe('CertificadoNR35LinhaVidaP1Component', () => {
  let component: CertificadoNR35LinhaVidaP1Component;
  let fixture: ComponentFixture<CertificadoNR35LinhaVidaP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35LinhaVidaP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35LinhaVidaP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
