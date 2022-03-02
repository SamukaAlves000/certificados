import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR12NR31SegOpMaqAgricolasComponent } from './certificado-nr12-nr31-seg-op-maq-agricolas.component';

describe('CertificadoNR12NR31SegOpMaqAgricolasComponent', () => {
  let component: CertificadoNR12NR31SegOpMaqAgricolasComponent;
  let fixture: ComponentFixture<CertificadoNR12NR31SegOpMaqAgricolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR12NR31SegOpMaqAgricolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR12NR31SegOpMaqAgricolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
