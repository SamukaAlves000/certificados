import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpRoloCompactadorP1Component } from './certificado-nr11-op-rolo-compactador-p1.component';

describe('CertificadoNR11OpRoloCompactadorP1Component', () => {
  let component: CertificadoNR11OpRoloCompactadorP1Component;
  let fixture: ComponentFixture<CertificadoNR11OpRoloCompactadorP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpRoloCompactadorP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpRoloCompactadorP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
