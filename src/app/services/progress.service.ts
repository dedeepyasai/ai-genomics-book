import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Progress {
  completedChapters: number[];
  completedSubChapters: string[];
  quizScores: Record<string, number>;
}

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private readonly STORAGE_KEY = 'book_progress';
  
  // Initialize progress with default values
  private progress: Progress = {
    completedChapters: [],
    completedSubChapters: [],
    quizScores: {}
  };

  private progressSubject = new BehaviorSubject<Progress>({
    completedChapters: [],
    completedSubChapters: [],
    quizScores: {}
  });

  constructor() {
    this.loadProgress();
  }

  private loadProgress() {
    const savedProgress = localStorage.getItem(this.STORAGE_KEY);
    if (savedProgress) {
      this.progress = JSON.parse(savedProgress);
    }
    this.progressSubject.next(this.progress);
  }

  private saveProgress() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progress));
    this.progressSubject.next(this.progress);
  }

  markChapterComplete(chapterId: number) {
    if (!this.progress.completedChapters.includes(chapterId)) {
      this.progress.completedChapters.push(chapterId);
      this.saveProgress();
    }
  }

  markSubChapterComplete(subChapterId: string) {
    if (!this.progress.completedSubChapters.includes(subChapterId)) {
      this.progress.completedSubChapters.push(subChapterId);
      this.saveProgress();
    }
  }

  saveQuizScore(quizId: string, score: number) {
    this.progress.quizScores[quizId] = Math.max(
      score,
      this.progress.quizScores[quizId] || 0
    );
    this.saveProgress();
  }

  getProgress() {
    return this.progressSubject.asObservable();
  }

  isChapterCompleted(chapterId: number): boolean {
    return this.progress.completedChapters.includes(chapterId);
  }

  isSubChapterCompleted(subChapterId: string): boolean {
    return this.progress.completedSubChapters.includes(subChapterId);
  }

  getQuizScore(quizId: string): number {
    return this.progress.quizScores[quizId] || 0;
  }

  resetProgress() {
    this.progress = {
      completedChapters: [],
      completedSubChapters: [],
      quizScores: {}
    };
    this.saveProgress();
  }
}