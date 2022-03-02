import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpRoloCompactadorP2Component } from './certificado-nr11-op-rolo-compactador-p2.component';

describe('CertificadoNR11OpRoloCompactadorP2Component', () => {
  let component: CertificadoNR11OpRoloCompactadorP2Component;
  let fixture: ComponentFixture<CertificadoNR11OpRoloCompactadorP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpRoloCompactadorP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpRoloCompactadorP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
