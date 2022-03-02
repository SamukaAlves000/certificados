import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoDirecaoDefensivaComponent } from './certificado-direcao-defensiva.component';

describe('CertificadoDirecaoDefensivaComponent', () => {
  let component: CertificadoDirecaoDefensivaComponent;
  let fixture: ComponentFixture<CertificadoDirecaoDefensivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoDirecaoDefensivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoDirecaoDefensivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
