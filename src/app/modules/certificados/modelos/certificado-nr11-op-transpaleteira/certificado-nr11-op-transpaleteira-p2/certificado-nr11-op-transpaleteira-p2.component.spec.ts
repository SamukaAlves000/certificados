import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTranspaleteiraP2Component } from './certificado-nr11-op-transpaleteira-p2.component';

describe('CertificadoNR11OpTranspaleteiraP2Component', () => {
  let component: CertificadoNR11OpTranspaleteiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpTranspaleteiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTranspaleteiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTranspaleteiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
