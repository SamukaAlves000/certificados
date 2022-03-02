import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTranspaleteiraP1Component } from './certificado-nr11-op-transpaleteira-p1.component';

describe('CertificadoNR11OpTranspaleteiraP1Component', () => {
  let component: CertificadoNR11OpTranspaleteiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpTranspaleteiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTranspaleteiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTranspaleteiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
