import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31OpRocadeiraCostasComponent } from './certificado-nr12-nr31-op-rocadeira-costas.component';

describe('CertificadoNR12NR31OpRocadeiraCostasComponent', () => {
  let component: CertificadoNR12NR31OpRocadeiraCostasComponent;
  let fixture: ComponentFixture<CertificadoNR12NR31OpRocadeiraCostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31OpRocadeiraCostasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31OpRocadeiraCostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
