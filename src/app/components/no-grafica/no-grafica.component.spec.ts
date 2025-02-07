import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoGraficaComponent } from './no-grafica.component';

describe('NoGraficaComponent', () => {
  let component: NoGraficaComponent;
  let fixture: ComponentFixture<NoGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoGraficaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
