import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Chapter } from '../../models/book.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html'
})
export class ChapterComponent implements OnInit {
  chapter?: Chapter;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      this.bookService.getChapter(id).subscribe(
        chapter => this.chapter = chapter
      );
    });
  }
}