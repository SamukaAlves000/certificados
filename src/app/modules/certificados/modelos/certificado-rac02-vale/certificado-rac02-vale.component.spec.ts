import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoRAC02ValeComponent } from './certificado-rac02-vale.component';

describe('CertificadoRAC02ValeComponent', () => {
  let component: CertificadoRAC02ValeComponent;
  let fixture: ComponentFixture<CertificadoRAC02ValeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoRAC02ValeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoRAC02ValeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
