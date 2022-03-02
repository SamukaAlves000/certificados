import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetificadoNR23BrigadaIncendioIComponent } from './cetificado-nr23-brigada-incendio-i.component';

describe('CetificadoNR23BrigadaIncendioIComponent', () => {
  let component: CetificadoNR23BrigadaIncendioIComponent;
  let fixture: ComponentFixture<CetificadoNR23BrigadaIncendioIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CetificadoNR23BrigadaIncendioIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CetificadoNR23BrigadaIncendioIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
