import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpPaCarregadeiraComponent } from './certificado-nr11-op-pa-carregadeira.component';

describe('CertificadoNR11OpPaCarregadeiraComponent', () => {
  let component: CertificadoNR11OpPaCarregadeiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpPaCarregadeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpPaCarregadeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpPaCarregadeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
