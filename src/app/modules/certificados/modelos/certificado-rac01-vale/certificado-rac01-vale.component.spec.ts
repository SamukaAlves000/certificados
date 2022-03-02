import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoRAC01ValeComponent } from './certificado-rac01-vale.component';

describe('CertificadoRAC01ValeComponent', () => {
  let component: CertificadoRAC01ValeComponent;
  let fixture: ComponentFixture<CertificadoRAC01ValeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoRAC01ValeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoRAC01ValeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
