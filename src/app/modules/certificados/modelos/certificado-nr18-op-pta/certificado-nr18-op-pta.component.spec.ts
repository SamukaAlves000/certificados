import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR18OpPTAComponent } from './certificado-nr18-op-pta.component';

describe('CertificadoNR18OpPTAComponent', () => {
  let component: CertificadoNR18OpPTAComponent;
  let fixture: ComponentFixture<CertificadoNR18OpPTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR18OpPTAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR18OpPTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
