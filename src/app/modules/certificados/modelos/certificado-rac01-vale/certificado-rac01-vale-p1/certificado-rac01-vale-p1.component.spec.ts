import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoRAC01ValeP1Component } from './certificado-rac01-vale-p1.component';

describe('CertificadoRAC01ValeP1Component', () => {
  let component: CertificadoRAC01ValeP1Component;
  let fixture: ComponentFixture<CertificadoRAC01ValeP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoRAC01ValeP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoRAC01ValeP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
