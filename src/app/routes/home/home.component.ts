import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Chapter } from '../../models/book.model';

@Component({
  selector: 'app-home',
  template: `
    <div class="min-h-screen bg-gray-50 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            AI-Driven Genomics
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Learn about genomics, AI, and their intersection in modern medicine.
          </p>
        </div>

        <div class="mt-16">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div *ngFor="let chapter of chapters" 
                 class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Chapter {{chapter.id}}: {{chapter.title}}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{chapter.description}}
                </p>
                <div class="mt-4">
                  <a [routerLink]="['/chapter', chapter.id]" 
                     class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
                    Start Chapter →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  chapters: Chapter[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getChapters().subscribe(
      chapters => this.chapters = chapters
    );
  }
}