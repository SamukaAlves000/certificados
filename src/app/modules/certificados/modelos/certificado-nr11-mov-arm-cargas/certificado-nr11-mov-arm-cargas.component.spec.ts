import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11MovArmCargasComponent } from './certificado-nr11-mov-arm-cargas.component';

describe('CertificadoNR11MovArmCargasComponent', () => {
  let component: CertificadoNR11MovArmCargasComponent;
  let fixture: ComponentFixture<CertificadoNR11MovArmCargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11MovArmCargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11MovArmCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
