import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31OpMotoPodaComponent } from './certificado-nr12-nr31-op-moto-poda.component';

describe('CertificadoNR12NR31OpMotoPodaComponent', () => {
  let component: CertificadoNR12NR31OpMotoPodaComponent;
  let fixture: ComponentFixture<CertificadoNR12NR31OpMotoPodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31OpMotoPodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31OpMotoPodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
