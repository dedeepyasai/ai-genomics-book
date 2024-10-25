import { Component, Input } from '@angular/core';
import { CodingExercise } from '../../models/book.model';

@Component({
  selector: 'app-coding-exercise',
  templateUrl: './coding-exercise.component.html'
})
export class CodingExerciseComponent {
  @Input() exercise?: CodingExercise;
  showSolution = false;

  toggleSolution() {
    this.showSolution = !this.showSolution;
  }
}