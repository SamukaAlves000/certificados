import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR26NR36ProdutosQuimicosComponent } from './certificado-nr26-nr36-produtos-quimicos.component';

describe('CertificadoNR26NR36ProdutosQuimicosComponent', () => {
  let component: CertificadoNR26NR36ProdutosQuimicosComponent;
  let fixture: ComponentFixture<CertificadoNR26NR36ProdutosQuimicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR26NR36ProdutosQuimicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR26NR36ProdutosQuimicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
