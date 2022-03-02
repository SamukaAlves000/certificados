import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR6EPISComponent } from './certificado-nr6-epis.component';

describe('CertificadoNR6EPISComponent', () => {
  let component: CertificadoNR6EPISComponent;
  let fixture: ComponentFixture<CertificadoNR6EPISComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR6EPISComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR6EPISComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
