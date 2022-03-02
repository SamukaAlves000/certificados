import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23CombateIncendioComponent } from './certificado-nr23-combate-incendio.component';

describe('CertificadoNR23CombateIncendioComponent', () => {
  let component: CertificadoNR23CombateIncendioComponent;
  let fixture: ComponentFixture<CertificadoNR23CombateIncendioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23CombateIncendioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23CombateIncendioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
