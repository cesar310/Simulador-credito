import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaInformacionComponent } from './tarjeta-informacion.component';

describe('TarjetaInformacionComponent', () => {
  let component: TarjetaInformacionComponent;
  let fixture: ComponentFixture<TarjetaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
