import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TrabAlturaComponent } from './certificado-nr35-trab-altura.component';

describe('CertificadoNR35TrabAlturaComponent', () => {
  let component: CertificadoNR35TrabAlturaComponent;
  let fixture: ComponentFixture<CertificadoNR35TrabAlturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TrabAlturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TrabAlturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
