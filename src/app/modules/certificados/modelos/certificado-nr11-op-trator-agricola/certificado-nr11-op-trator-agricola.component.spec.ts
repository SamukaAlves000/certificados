import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorAgricolaComponent } from './certificado-nr11-op-trator-agricola.component';

describe('CertificadoNR11OpTratorAgricolaComponent', () => {
  let component: CertificadoNR11OpTratorAgricolaComponent;
  let fixture: ComponentFixture<CertificadoNR11OpTratorAgricolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorAgricolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorAgricolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
