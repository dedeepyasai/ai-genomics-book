import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Chapter } from '../../models/book.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  chapters: Chapter[] = [];
  currentChapter?: Chapter;
  showChaptersMenu = false;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    // Load chapters
    this.bookService.getChapters().subscribe(
      chapters => this.chapters = chapters
    );

    // Track current route for highlighting active chapter
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateCurrentChapter();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      const dropdown = document.querySelector('#chaptersDropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        this.showChaptersMenu = false;
      }
    });
  }

  toggleChaptersMenu() {
    this.showChaptersMenu = !this.showChaptersMenu;
  }

  closeChaptersMenu() {
    this.showChaptersMenu = false;
  }

  private updateCurrentChapter() {
    const urlParts = this.router.url.split('/');
    if (urlParts.includes('chapter')) {
      const chapterId = parseInt(urlParts[urlParts.indexOf('chapter') + 1], 10);
      this.bookService.getChapter(chapterId).subscribe(
        chapter => this.currentChapter = chapter
      );
    } else {
      this.currentChapter = undefined;
    }
  }
}