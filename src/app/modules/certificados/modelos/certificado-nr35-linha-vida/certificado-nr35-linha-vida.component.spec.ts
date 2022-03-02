import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35LinhaVidaComponent } from './certificado-nr35-linha-vida.component';

describe('CertificadoNR35LinhaVidaComponent', () => {
  let component: CertificadoNR35LinhaVidaComponent;
  let fixture: ComponentFixture<CertificadoNR35LinhaVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35LinhaVidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35LinhaVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
