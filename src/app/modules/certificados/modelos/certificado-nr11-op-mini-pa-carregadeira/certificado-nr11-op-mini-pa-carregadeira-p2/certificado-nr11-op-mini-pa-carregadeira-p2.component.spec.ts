import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpMiniPaCarregadeiraP2Component } from './certificado-nr11-op-mini-pa-carregadeira-p2.component';

describe('CertificadoNR11OpMiniPaCarregadeiraP2Component', () => {
  let component: CertificadoNR11OpMiniPaCarregadeiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpMiniPaCarregadeiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpMiniPaCarregadeiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpMiniPaCarregadeiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
