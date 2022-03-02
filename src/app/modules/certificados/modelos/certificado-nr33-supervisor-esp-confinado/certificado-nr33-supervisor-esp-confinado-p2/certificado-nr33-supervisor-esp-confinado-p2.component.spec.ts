import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR33SupervisorEspConfinadoP2Component } from './certificado-nr33-supervisor-esp-confinado-p2.component';

describe('CertificadoNR33SupervisorEspConfinadoP2Component', () => {
  let component: CertificadoNR33SupervisorEspConfinadoP2Component;
  let fixture: ComponentFixture<CertificadoNR33SupervisorEspConfinadoP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR33SupervisorEspConfinadoP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR33SupervisorEspConfinadoP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
