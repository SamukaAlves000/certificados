import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoFerramensRotativasComponent } from './certificado-ferramens-rotativas.component';

describe('CertificadoFerramensRotativasComponent', () => {
  let component: CertificadoFerramensRotativasComponent;
  let fixture: ComponentFixture<CertificadoFerramensRotativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoFerramensRotativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoFerramensRotativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
