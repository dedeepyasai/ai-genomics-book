import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingExerciseComponent } from './coding-exercise.component';

describe('CodingExerciseComponent', () => {
  let component: CodingExerciseComponent;
  let fixture: ComponentFixture<CodingExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
