import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpRoloCompactadorComponent } from './certificado-nr11-op-rolo-compactador.component';

describe('CertificadoNR11OpRoloCompactadorComponent', () => {
  let component: CertificadoNR11OpRoloCompactadorComponent;
  let fixture: ComponentFixture<CertificadoNR11OpRoloCompactadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpRoloCompactadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpRoloCompactadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
