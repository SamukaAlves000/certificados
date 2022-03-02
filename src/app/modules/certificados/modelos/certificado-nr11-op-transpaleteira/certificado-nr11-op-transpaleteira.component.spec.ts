import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR11OpTranspaleteiraComponent } from './certificado-nr11-op-transpaleteira.component';

describe('CertificadoNR11OpTranspaleteiraComponent', () => {
  let component: CertificadoNR11OpTranspaleteiraComponent;
  let fixture: ComponentFixture<CertificadoNR11OpTranspaleteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR11OpTranspaleteiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR11OpTranspaleteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
