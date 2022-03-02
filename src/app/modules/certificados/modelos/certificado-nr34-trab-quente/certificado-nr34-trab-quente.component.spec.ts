import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR34TrabQuenteComponent } from './certificado-nr34-trab-quente.component';

describe('CertificadoNR34TrabQuenteComponent', () => {
  let component: CertificadoNR34TrabQuenteComponent;
  let fixture: ComponentFixture<CertificadoNR34TrabQuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR34TrabQuenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR34TrabQuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
