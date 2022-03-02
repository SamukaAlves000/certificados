import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadosViewComponent } from './certificados-view.component';

describe('CertificadosViewComponent', () => {
  let component: CertificadosViewComponent;
  let fixture: ComponentFixture<CertificadosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificadosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
