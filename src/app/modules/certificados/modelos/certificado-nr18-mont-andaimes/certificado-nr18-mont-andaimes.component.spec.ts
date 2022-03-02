import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18MontAndaimesComponent } from './certificado-nr18-mont-andaimes.component';

describe('CertificadoNR18MontAndaimesComponent', () => {
  let component: CertificadoNR18MontAndaimesComponent;
  let fixture: ComponentFixture<CertificadoNR18MontAndaimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18MontAndaimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18MontAndaimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
