import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/book.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
  @Input() questions: Quiz[] = [];
  selectedAnswers: string[] = [];
  showResults = false;

  checkAnswers() {
    if (this.showResults) {
      this.selectedAnswers = [];
      this.showResults = false;
    } else {
      this.showResults = true;
    }
  }
}