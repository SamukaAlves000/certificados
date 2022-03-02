import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR6EPISP1Component } from './certificado-nr6-epis-p1.component';

describe('CertificadoNR6EPISP1Component', () => {
  let component: CertificadoNR6EPISP1Component;
  let fixture: ComponentFixture<CertificadoNR6EPISP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR6EPISP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR6EPISP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
