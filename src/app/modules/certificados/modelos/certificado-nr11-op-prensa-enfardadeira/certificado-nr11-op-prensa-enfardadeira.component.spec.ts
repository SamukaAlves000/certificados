import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPrensaEnfardadeiraComponent } from './certificado-nr11-op-prensa-enfardadeira.component';

describe('CertificadoNR11OpPrensaEnfardadeiraComponent', () => {
  let component: CertificadoNR11OpPrensaEnfardadeiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpPrensaEnfardadeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPrensaEnfardadeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPrensaEnfardadeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
