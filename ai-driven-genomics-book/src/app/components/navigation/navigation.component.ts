import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'
import { Chapter } from '../../models/book.model';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold">AI-Driven Genomics</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <ng-container *ngFor="let chapter of chapters">
                <a [routerLink]="['/chapter', chapter.id]"
                   routerLinkActive="border-indigo-500"
                   class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Chapter {{chapter.id}}
                </a>
              </ng-container>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent implements OnInit {
  chapters: Chapter[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getChapters().subscribe(
      chapters => this.chapters = chapters
    );
  }
}