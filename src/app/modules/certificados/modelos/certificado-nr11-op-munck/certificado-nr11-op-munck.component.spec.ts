import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpMunckComponent } from './certificado-nr11-op-munck.component';

describe('CertificadoNR11OpMunckComponent', () => {
  let component: CertificadoNR11OpMunckComponent;
  let fixture: ComponentFixture<CertificadoNR11OpMunckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpMunckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpMunckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
