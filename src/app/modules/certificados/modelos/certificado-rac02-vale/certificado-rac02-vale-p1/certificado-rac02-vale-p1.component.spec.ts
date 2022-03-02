import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoRAC02ValeP1Component } from './certificado-rac02-vale-p1.component';

describe('CertificadoRAC02ValeP1Component', () => {
  let component: CertificadoRAC02ValeP1Component;
  let fixture: ComponentFixture<CertificadoRAC02ValeP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoRAC02ValeP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoRAC02ValeP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
