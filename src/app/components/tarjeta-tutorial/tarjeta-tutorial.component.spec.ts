import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTutorialComponent } from './tarjeta-tutorial.component';

describe('TarjetaTutorialComponent', () => {
  let component: TarjetaTutorialComponent;
  let fixture: ComponentFixture<TarjetaTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
