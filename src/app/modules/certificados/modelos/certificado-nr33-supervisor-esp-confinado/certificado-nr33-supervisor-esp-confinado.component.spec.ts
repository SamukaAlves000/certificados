import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR33SupervisorEspConfinadoComponent } from './certificado-nr33-supervisor-esp-confinado.component';

describe('CertificadoNR33SupervisorEspConfinadoComponent', () => {
  let component: CertificadoNR33SupervisorEspConfinadoComponent;
  let fixture: ComponentFixture<CertificadoNR33SupervisorEspConfinadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR33SupervisorEspConfinadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR33SupervisorEspConfinadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
