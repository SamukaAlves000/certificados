import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoNR35TaludesComponent } from './certificado-nr35-taludes.component';

describe('CertificadoNR35TaludesComponent', () => {
  let component: CertificadoNR35TaludesComponent;
  let fixture: ComponentFixture<CertificadoNR35TaludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadoNR35TaludesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoNR35TaludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
