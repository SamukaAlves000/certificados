import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTratorEsteiraComponent } from './certificado-nr11-op-trator-esteira.component';

describe('CertificadoNR11OpTratorEsteiraComponent', () => {
  let component: CertificadoNR11OpTratorEsteiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpTratorEsteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTratorEsteiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTratorEsteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
