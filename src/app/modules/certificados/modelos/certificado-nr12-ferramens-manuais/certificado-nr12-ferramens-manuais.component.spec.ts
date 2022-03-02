import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12FerramensManuaisComponent } from './certificado-nr12-ferramens-manuais.component';

describe('CertificadoNR12FerramensManuaisComponent', () => {
  let component: CertificadoNR12FerramensManuaisComponent;
  let fixture: ComponentFixture<CertificadoNR12FerramensManuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12FerramensManuaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12FerramensManuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
