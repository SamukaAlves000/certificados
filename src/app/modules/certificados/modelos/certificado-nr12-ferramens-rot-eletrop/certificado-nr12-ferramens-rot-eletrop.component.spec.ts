import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensRotEletropComponent } from './certificado-nr12-ferramens-rot-eletrop.component';

describe('CertificadoNR12FerramensRotEletropComponent', () => {
  let component: CertificadoNR12FerramensRotEletropComponent;
  let fixture: ComponentFixture<CertificadoNR12FerramensRotEletropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensRotEletropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensRotEletropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
