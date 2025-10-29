import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionTwoComponent } from './instruction-two.component';

describe('InstructionTwoComponent', () => {
  let component: InstructionTwoComponent;
  let fixture: ComponentFixture<InstructionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
