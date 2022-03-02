import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR6EPISP2Component } from './certificado-nr6-epis-p2.component';

describe('CertificadoNR6EPISP2Component', () => {
  let component: CertificadoNR6EPISP2Component;
  let fixture: ComponentFixture<CertificadoNR6EPISP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR6EPISP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR6EPISP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
