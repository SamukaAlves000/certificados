import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR10SEPComponent } from './certificado-nr10-sep.component';

describe('CertificadoNR10SEPComponent', () => {
  let component: CertificadoNR10SEPComponent;
  let fixture: ComponentFixture<CertificadoNR10SEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR10SEPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR10SEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
