import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR26NR36ProdutosQuimicosP1Component } from './certificado-nr26-nr36-produtos-quimicos-p1.component';

describe('CertificadoNR26NR36ProdutosQuimicosP1Component', () => {
  let component: CertificadoNR26NR36ProdutosQuimicosP1Component;
  let fixture: ComponentFixture<CertificadoNR26NR36ProdutosQuimicosP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR26NR36ProdutosQuimicosP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR26NR36ProdutosQuimicosP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
