import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34MaqRotativasComponent } from './certificado-nr34-maq-rotativas.component';

describe('CertificadoNR34MaqRotativasComponent', () => {
  let component: CertificadoNR34MaqRotativasComponent;
  let fixture: ComponentFixture<CertificadoNR34MaqRotativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34MaqRotativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34MaqRotativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
