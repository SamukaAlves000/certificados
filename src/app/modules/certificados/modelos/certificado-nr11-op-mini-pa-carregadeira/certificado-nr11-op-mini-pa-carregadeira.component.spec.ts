import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpMiniPaCarregadeiraComponent } from './certificado-nr11-op-mini-pa-carregadeira.component';

describe('CertificadoNR11OpMiniPaCarregadeiraComponent', () => {
  let component: CertificadoNR11OpMiniPaCarregadeiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpMiniPaCarregadeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpMiniPaCarregadeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpMiniPaCarregadeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
