import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TaludesP2Component } from './certificado-nr35-taludes-p2.component';

describe('CertificadoNR35TaludesP2Component', () => {
  let component: CertificadoNR35TaludesP2Component;
  let fixture: ComponentFixture<CertificadoNR35TaludesP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TaludesP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TaludesP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
