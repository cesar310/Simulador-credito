import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoTutorialComponent } from './parrafo-tutorial.component';

describe('ParrafoTutorialComponent', () => {
  let component: ParrafoTutorialComponent;
  let fixture: ComponentFixture<ParrafoTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParrafoTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrafoTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
