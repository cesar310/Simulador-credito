import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloTutorialComponent } from './titulo-tutorial.component';

describe('TituloTutorialComponent', () => {
  let component: TituloTutorialComponent;
  let fixture: ComponentFixture<TituloTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
