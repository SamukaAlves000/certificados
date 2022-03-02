import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TaludesP1Component } from './certificado-nr35-taludes-p1.component';

describe('CertificadoNR35TaludesP1Component', () => {
  let component: CertificadoNR35TaludesP1Component;
  let fixture: ComponentFixture<CertificadoNR35TaludesP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TaludesP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TaludesP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
