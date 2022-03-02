import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR26NR36ProdutosQuimicosP2Component } from './certificado-nr26-nr36-produtos-quimicos-p2.component';

describe('CertificadoNR26NR36ProdutosQuimicosP2Component', () => {
  let component: CertificadoNR26NR36ProdutosQuimicosP2Component;
  let fixture: ComponentFixture<CertificadoNR26NR36ProdutosQuimicosP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR26NR36ProdutosQuimicosP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR26NR36ProdutosQuimicosP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
