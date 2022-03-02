import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPaCarregadeiraP1Component } from './certificado-nr11-op-pa-carregadeira-p1.component';

describe('CertificadoNR11OpPaCarregadeiraP1Component', () => {
  let component: CertificadoNR11OpPaCarregadeiraP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpPaCarregadeiraP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPaCarregadeiraP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPaCarregadeiraP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
