import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosCreateComponent } from './certificados-create.component';

describe('CertificadosCreateComponent', () => {
  let component: CertificadosCreateComponent;
  let fixture: ComponentFixture<CertificadosCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
