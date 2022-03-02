import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR5CIPAComponent } from './certificado-nr5-cipa.component';

describe('CertificadoNR5CIPAComponent', () => {
  let component: CertificadoNR5CIPAComponent;
  let fixture: ComponentFixture<CertificadoNR5CIPAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR5CIPAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR5CIPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
