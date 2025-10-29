import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitChoiceComponent } from './circuit-choice.component';

describe('CircuitChoiceComponent', () => {
  let component: CircuitChoiceComponent;
  let fixture: ComponentFixture<CircuitChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircuitChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
