import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR33SupervisorEspConfinadoP1Component } from './certificado-nr33-supervisor-esp-confinado-p1.component';

describe('CertificadoNR33SupervisorEspConfinadoP1Component', () => {
  let component: CertificadoNR33SupervisorEspConfinadoP1Component;
  let fixture: ComponentFixture<CertificadoNR33SupervisorEspConfinadoP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR33SupervisorEspConfinadoP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR33SupervisorEspConfinadoP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
