import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR17ErgonomiaComponent } from './certificado-nr17-ergonomia.component';

describe('CertificadoNR17ErgonomiaComponent', () => {
  let component: CertificadoNR17ErgonomiaComponent;
  let fixture: ComponentFixture<CertificadoNR17ErgonomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR17ErgonomiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR17ErgonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
