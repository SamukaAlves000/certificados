import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpEmpilhadeiraComponent } from './certificado-nr11-op-empilhadeira.component';

describe('CertificadoNR11OpEmpilhadeiraComponent', () => {
  let component: CertificadoNR11OpEmpilhadeiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpEmpilhadeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpEmpilhadeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpEmpilhadeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
