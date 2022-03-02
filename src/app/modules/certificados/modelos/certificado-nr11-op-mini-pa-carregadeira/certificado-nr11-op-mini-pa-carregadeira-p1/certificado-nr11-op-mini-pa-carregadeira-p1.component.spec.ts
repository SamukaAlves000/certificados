import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpMiniPaCarregadeiraP1Component } from './certificado-nr11-op-mini-pa-carregadeira-p1.component';

describe('CertificadoNR11OpMiniPaCarregadeiraP1Component', () => {
  let component: CertificadoNR11OpMiniPaCarregadeiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpMiniPaCarregadeiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpMiniPaCarregadeiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpMiniPaCarregadeiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
