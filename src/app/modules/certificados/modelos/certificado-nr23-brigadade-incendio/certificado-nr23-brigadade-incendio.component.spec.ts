import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR23BrigadadeIncendioComponent } from './certificado-nr23-brigadade-incendio.component';

describe('CertificadoNR23BrigadadeIncendioComponent', () => {
  let component: CertificadoNR23BrigadadeIncendioComponent;
  let fixture: ComponentFixture<CertificadoNR23BrigadadeIncendioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR23BrigadadeIncendioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR23BrigadadeIncendioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
