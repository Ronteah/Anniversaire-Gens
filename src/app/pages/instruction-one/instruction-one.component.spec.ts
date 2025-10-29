import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionOneComponent } from './instruction-one.component';

describe('InstructionOneComponent', () => {
  let component: InstructionOneComponent;
  let fixture: ComponentFixture<InstructionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
