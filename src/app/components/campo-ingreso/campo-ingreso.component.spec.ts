import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoIngresoComponent } from './campo-ingreso.component';

describe('CampoIngresoComponent', () => {
  let component: CampoIngresoComponent;
  let fixture: ComponentFixture<CampoIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampoIngresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
