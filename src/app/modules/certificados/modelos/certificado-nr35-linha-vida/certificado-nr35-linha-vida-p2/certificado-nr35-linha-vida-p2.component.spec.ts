import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35LinhaVidaP2Component } from './certificado-nr35-linha-vida-p2.component';

describe('CertificadoNR35LinhaVidaP2Component', () => {
  let component: CertificadoNR35LinhaVidaP2Component;
  let fixture: ComponentFixture<CertificadoNR35LinhaVidaP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35LinhaVidaP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35LinhaVidaP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
