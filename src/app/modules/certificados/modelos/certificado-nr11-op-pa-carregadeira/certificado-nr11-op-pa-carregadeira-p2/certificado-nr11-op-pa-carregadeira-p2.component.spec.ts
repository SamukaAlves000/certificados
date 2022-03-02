import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPaCarregadeiraP2Component } from './certificado-nr11-op-pa-carregadeira-p2.component';

describe('CertificadoNR11OpPaCarregadeiraP2Component', () => {
  let component: CertificadoNR11OpPaCarregadeiraP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpPaCarregadeiraP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPaCarregadeiraP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPaCarregadeiraP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
